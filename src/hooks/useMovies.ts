import { useState, useEffect, useMemo, useCallback } from "react";
import type { Movie } from "../core/models/Movie";
import { ApiMovieRepository } from "../core/repositories/ApiMovieRepository";
import { MovieService } from "../core/services/MovieService";
import { FilterService, type MovieFilters } from "../core/services/FilterService";

export const useMovies = () => {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<MovieFilters>({ type: "all" });
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const movieService = useMemo(
    () => new MovieService(new ApiMovieRepository()),
    []
  );

  const filteredMovies = useMemo(() => {
    return FilterService.filterMovies(allMovies, filters);
  }, [allMovies, filters]);

  useEffect(() => {
    const loadInitial = async () => {
      try {
        setLoading(true);
        const data = await movieService.searchMoviesByTitle("Inception");
        if (data.Response === "True") {
          setAllMovies((data.Search as Movie[]) || []);
          setTotalResults(parseInt(data.totalResults || "0", 10));
        } else {
          setError(data.Error || "Error desconocido");
        }
      } catch (err) {
        setError("Error al cargar las películas");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitial();
  }, [movieService]);

  const searchMoviesByTitle = useCallback(async (title: string, page: number = 1) => {
    if (!title) {
      setAllMovies([]);
      setTotalResults(0);
      setCurrentPage(1);
      return;
    }

    try {
      setLoading(true);
      const data = await movieService.searchMoviesByTitle(title, page);
      if (data.Response === "True") {
        setAllMovies((data.Search as Movie[]) || []);
        setTotalResults(parseInt(data.totalResults || "0", 10));
        setCurrentPage(page);
        setError(null);
      } else {
        setAllMovies([]);
        setTotalResults(0);
        setCurrentPage(1);
        setError(data.Error || "Sin resultados");
      }
    } catch (err) {
      setError("Error al buscar películas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [movieService]);

  const updateFilters = (newFilters: Partial<MovieFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return { 
    movies: filteredMovies, 
    loading, 
    error, 
    searchMoviesByTitle,
    filters,
    updateFilters,
    totalResults,
    currentPage
  };
};
