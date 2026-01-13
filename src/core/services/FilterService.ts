import type { Movie } from "../models/Movie";

export interface MovieFilters {
  type: string;
}

export class FilterService {
  static filterMovies(movies: Movie[], filters: MovieFilters): Movie[] {
    return movies.filter((movie) => {
      const matchesType = 
        filters.type === "all" || 
        movie.Type.toLowerCase() === filters.type.toLowerCase();

      return matchesType;
    });
  }
}
