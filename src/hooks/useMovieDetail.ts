import { useState, useCallback } from "react";
import type { Movie } from "../core/models/Movie";
import { MovieService } from "../core/services/MovieService";
import { ApiMovieRepository } from "../core/repositories/ApiMovieRepository";

const movieService = new MovieService(new ApiMovieRepository());

export const useMovieDetail = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getMovieById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await movieService.fetchMovieDetail(id);
      if (result) {
        setMovie(result);
      } else {
        setError("No se encontró la película");
      }
    } catch (err) {
      setError("Error al cargar los detalles de la película");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    movie,
    loading,
    error,
    getMovieById,
  };
};
