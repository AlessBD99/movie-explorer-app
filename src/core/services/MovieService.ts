import type { Movie } from "../models/Movie";
import type { SearchResponse } from "../models/SearchResponse";
import type { IMovieRepository } from "../repositories/IMovieRepository";

export class MovieService {
  private movieRepository: IMovieRepository;
  constructor(movieRepository: IMovieRepository) {
    this.movieRepository = movieRepository;
  }

  async fetchMovieDetail(id: string): Promise<Movie | null> {
    try {
      return await this.movieRepository.getMovieById(id);
    } catch (error) {
      console.error(`Error fetching movie ${id} in service:`, error);
      throw error;
    }
  }

  async searchMoviesByTitle(title: string, page?: number): Promise<SearchResponse> {
    try {
      return await this.movieRepository.searchMovies(title, page);
    } catch (error) {
      console.error(`Error searching movies for "${title}" in service:`, error);
      throw error;
    }
  }
}
