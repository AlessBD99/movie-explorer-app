# The Film Vault - Movie Explorer

Este repositorio contiene el desarrollo de **The Film Vault**, una aplicación de búsqueda y exploración de cine y televisión. Este proyecto ha sido diseñado y construido específicamente como respuesta a una evaluación técnica, ofreciendo una interfaz moderna y eficiente para interactuar con la API de OMDb.

## 🚀 Requisitos Previos

- Node.js (v18+)
- Una API Key de [OMDb API](http://www.omdbapi.com/apikey.aspx)

## 🛠️ Configuración

1. Copia el archivo de ejemplo para crear tu configuración local:
   ```bash
   cp .env.example .env
   ```
2. Abre el archivo `.env` y agrega tu API Key y la URL base:
   - `VITE_OMDB_API_KEY`: Tu clave privada de OMDb.
   - `VITE_OMDB_BASE_URL`: `http://www.omdbapi.com/` (ya incluida en el ejemplo).

## 📖 Comandos

- `npm install` - Instalar dependencias
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar construcción local
