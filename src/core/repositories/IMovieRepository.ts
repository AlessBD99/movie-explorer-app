import type { Movie } from "../models/Movie";
import type { SearchResponse } from "../models/SearchResponse";

export interface IMovieRepository {
  getMovieById(id: string): Promise<Movie | null>;
  searchMovies(title: string, page?: number): Promise<SearchResponse>;
}
