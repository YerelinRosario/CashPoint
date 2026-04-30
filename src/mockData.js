// ============================================================
//  MOCK DATA — Datos reales del sandbox del Banco Popular
//  Fuente: GET /ubicacionesatm/ubicacionesatm?Page=1 y ?Page=2
// ============================================================

export const mockATMs = [
  // ── Página 1 ──────────────────────────────────────────────
  { title: "ATM", id: "293", nombre: "ESTACION AXXON LUCAMI", Dir_Fis: "Av. 27 de Febrero No. 465", latitude: 18.454163, longitude: -69.957048, horario: "L-V: 7:00 am - 22:00 pm; S: 7:00 am - 22:00 pm; D: 7:00 am - 22:00 pm" },
  { title: "ATM", id: "10",  nombre: "MARMOTECH SAN CRISTOBAL", Dir_Fis: "Calle Privada, Madre Vieja San Cristóbal", latitude: 18.428582, longitude: -70.1058897, horario: null },
  { title: "ATM", id: "100", nombre: "PLAZA DON PAYERO, PUERTO PLATA", Dir_Fis: "Calle Duarte no 123, Luperón, Pto. Pta.", latitude: 19.53373, longitude: -70.5781, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "1002", nombre: "LABORATORIO CENTRO DE OPERACIONES", Dir_Fis: "Av. J. F. Kennedy esq. Av. Máximo Gómez", latitude: 18.481076, longitude: -69.912913, horario: null },
  { title: "ATM", id: "101", nombre: "ESTACION TEXACO VILLA LOS ALMACIGOS, R.D.", Dir_Fis: "DR. Darío Gómez M. #20B, Villa Los Almácigos, Santiago Rodríguez", latitude: 19.40815, longitude: -71.43932, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "102", nombre: "HOTEL MAJESTIC PUNTA CANA", Dir_Fis: "Carretera Arena Gorda, Punta Cana", latitude: 18.7294649, longitude: -68.466832, horario: null },
  { title: "ATM", id: "104", nombre: "ESTACION TOTAL LA MACORISANA, S.P.M.", Dir_Fis: "Av. Francisco Caamaño, San Pedro de Macorís", latitude: 18.46536, longitude: -69.29752, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "105", nombre: "HOTEL OCCIDENTAL HUESPEDES", Dir_Fis: "Av. España, Bávaro detrás de Plaza Bávaro", latitude: 19.450177, longitude: -70.710557, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "106", nombre: "DISTRIBUIDORA CORRIPIO", Dir_Fis: "Av. Nuñez de Cáceres casi esquina Kennedy", latitude: 18.48001, longitude: -69.9610099, horario: null },

  // ── Página 2 ──────────────────────────────────────────────
  { title: "ATM", id: "562", nombre: "SANUT DOMINICANA PRUEBA", Dir_Fis: "Km. 10 1, Autopista Duarte", latitude: 18.4903118, longitude: -69.9816734, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "563", nombre: "LOBBY CENTRO DE OPERACIONES", Dir_Fis: "Av. J. F. Kennedy esq. Av. Máximo Gómez", latitude: 18.481076, longitude: -69.912913, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "564", nombre: "CLUB NAUTICO BOCA CHICA", Dir_Fis: "Calle Andres Boca Chica No.16, Andres Boca Chica", latitude: 18.44501, longitude: -69.62781, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "565", nombre: "HOTEL VIVA RESORT BAYAHIBE", Dir_Fis: "Av. Laguna No. 3, Dominicus Americanus", latitude: 18.34677, longitude: -68.82618, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "566", nombre: "ESTACION ISLA GELL RODRIGUEZ", Dir_Fis: "Carretera principal Cabareta-Gaspar Hernandez (cruce Veragua)", latitude: 19.66968, longitude: -70.3703, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "567", nombre: "OFICINA PLAZA INTERNACIONAL I-B, STGO.", Dir_Fis: "Av. Juan Pablo Duarte, Plaza Internacional", latitude: 18.483517, longitude: -69.927106, horario: "L-V: 5:30 am - 12:00 am; S: 5:30 am - 12:00 am; D: 7:00 am - 12:00 am" },
  { title: "ATM", id: "568", nombre: "ALMACENES GARRIDO LAS AMERICAS", Dir_Fis: "Marginal Autopista Las Américas, Casi esq. Av. Hípica", latitude: 18.4662667, longitude: -69.8156886, horario: "L-V: 8:00 am - 18:00 pm; S: 8:00 am - 18:00 pm; D: inhábil" },
  { title: "ATM", id: "569", nombre: "DOWNTOWN CENTER", Dir_Fis: "Av. Núñez de Cáceres Esq. Rómulo Betancourt", latitude: 18.4508993, longitude: -69.9527903, horario: "L-V: 8:00 am - 18:00 pm; S: 8:00 am - 18:00 pm; D: inhábil" },
  { title: "ATM", id: "57",  nombre: "SUPERMERCADO LA FUENTE FUN", Dir_Fis: "Av. Antonio Guzman #102 La Barranquita, Santiago", latitude: 19.44007, longitude: -70.72282, horario: null },
  { title: "ATM", id: "570", nombre: "LA CADENA NUÑEZ DE CACERES", Dir_Fis: "Av. Núñez de Cáceres casi esq. Estancia Nueva", latitude: 18.46894, longitude: -69.96035, horario: "L-V: 7:00 am - 22:00 pm; S: 7:00 am - 22:00 pm; D: 8:00 am - 14:30 pm" },
  { title: "ATM", id: "571", nombre: "OFICINA BAVARO FRIUSA I-b", Dir_Fis: "Carretera Higuey - Bavaro cruce de Friusa", latitude: 18.68504, longitude: -68.45229, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "572", nombre: "SEDERIAS EL CONDE", Dir_Fis: "Calle El Conde esq. Av. Duarte", latitude: 18.47301, longitude: -69.88617, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "573", nombre: "S.M. SOBERANO, SABANA PERDIDA", Dir_Fis: "Carret. La Victoria esq C/14 No.1, Sabana Perdida", latitude: 18.5443, longitude: -69.86024, horario: "L-V: 8:00 am - 22:00 pm; S: 8:00 am - 22:00 pm; D: 8:00 am - 20:00 pm" },
  { title: "ATM", id: "574", nombre: "HOTEL OCCIDENTAL CARIBE (Huespedes)", Dir_Fis: "Playa Bávaro", latitude: 18.73386, longitude: -68.47213, horario: "L-D: 0am-11:59pm" },
  { title: "ATM", id: "575", nombre: "CNP POLA ARROYO HONDO", Dir_Fis: "Luis Amiama Tió esq. Calle 51", latitude: 18.49247, longitude: -69.93262, horario: "L-V: 8:00 am - 22:00 pm; S: 8:00 am - 22:00 pm; D: 8:00 am - 15:00 pm" },
  { title: "ATM", id: "576", nombre: "Z. F. EDWARDS LIFESIGNS - ITABO", Dir_Fis: "Parque Industrial ITABO", latitude: 18.38821, longitude: -70.03829, horario: "L-V: 8:00 am - 18:00 pm; S: 8:00 am - 18:00 pm; D: inhábil" },
];