# CashPoint RD

Web app que localiza en tiempo real los cajeros automáticos del Banco Popular Dominicano, consumiendo la API oficial del **API Portal Popular**.

## ¿Qué hace?

Permite a cualquier usuario encontrar cajeros ATM del Banco Popular distribuidos en toda la República Dominicana. La información se obtiene directamente desde la API oficial del banco, incluyendo nombre del cajero, dirección física y horario de atención.

## Tecnologías

- **React 18**
- **CSS puro** con variables y animaciones
- **API Portal Popular** — Banco Popular Dominicano
- Autenticación **OAuth2** con flujo `client_credentials`

## Funcionalidades

- Búsqueda en tiempo real con debounce de 400ms
- Paginación de 9 cajeros por página
- Diseño institucional inspirado en el portal del Banco Popular
- Responsive para desktop y móvil

## Configuración

Crea un archivo `.env` en la raíz del proyecto con tus credenciales del [API Portal Popular](https://www.apiportal.popularenlinea.com):

```
REACT_APP_CLIENT_ID=tu_client_id
REACT_APP_CLIENT_SECRET=tu_client_secret
```

Luego instala y corre:

```bash
npm install
npm start
```

