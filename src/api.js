// ============================================================
//  CASHPOINT RD — API Service
// ============================================================

const CLIENT_ID     = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const TOKEN_URL     = process.env.REACT_APP_TOKEN_URL
  || 'https://api.us-east-a.apiconnect.ibmappdomain.cloud/apiportalpopular/bpdsandbox/bpd/Authentication/oauth2/token';
const API_URL       = process.env.REACT_APP_API_URL
  || 'https://api.us-east-a.apiconnect.ibmappdomain.cloud/apiportalpopular/bpdsandbox/ubicacionesatm/ubicacionesatm';

let cachedToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) return cachedToken;

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scope: 'scope_1',
  });

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) throw new Error(`Error obteniendo token: ${response.status}`);

  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return cachedToken;
}

export async function fetchATMLocations(page = 1) {
  const token = await getAccessToken();
  const response = await fetch(`${API_URL}?page=${page}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-IBM-Client-Id': CLIENT_ID,
    },
  });
  if (!response.ok) throw new Error(`Error en la API: ${response.status}`);
  return await response.json();
}

// Carga múltiples páginas en paralelo para tener suficientes cajeros
export async function fetchAllATMs() {
  const all = [];
  
  // Esperar 1 segundo entre cada llamada para no exceder el rate limit
  for (const page of [1, 2]) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const data = await fetchATMLocations(page);
      const list = data?.ATM || [];
      const valid = list.filter(a => a.nombre && !a.mensaje);
      all.push(...valid);
    } catch (err) {
      console.warn(`Página ${page} falló:`, err.message);
    }
  }
  
  return all;
}