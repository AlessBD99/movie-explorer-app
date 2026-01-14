const apiKey = import.meta.env.VITE_OMDB_API_KEY;
const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;

const validateEnv = (): boolean => {
  if (!apiKey || apiKey.trim() === "") {
    console.error("Falta la configuración de la API Key en el archivo .env");
    return false;
  }
  return true;
};

export const env = Object.freeze({
  apiKey,
  baseUrl,
  isValid: validateEnv(),
});