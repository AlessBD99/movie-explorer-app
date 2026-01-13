export const env = {
  OMDB_API_KEY: import.meta.env.VITE_OMDB_API_KEY || "1f7526c4",
  OMDB_BASE_URL: import.meta.env.VITE_OMDB_BASE_URL || "http://www.omdbapi.com/",
};

if (!env.OMDB_API_KEY && import.meta.env.MODE !== 'test') {
  console.warn("WARNING: VITE_OMDB_API_KEY is not defined in environment variables.");
}
