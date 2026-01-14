import type { Movie } from "../models/Movie";

import type { SearchResponse } from "../models/SearchResponse";
import type { IMovieRepository } from "./IMovieRepository";

import { env } from "../../config/env";

export class ApiMovieRepository implements IMovieRepository {
  async getMovieById(id: string): Promise<Movie | null> {
    const url = `${env.baseUrl}?apikey=${env.apiKey}&i=${id}`;
    try {
      const response = await fetch(url);  
      const data: Movie = await response.json();
      return data.Response === "True" ? data : null;
    } catch (error) {
      console.error(`Error fetching movie by ID ${id}:`, error);
      throw error;
    }
  }

  async searchMovies(title: string, page: number = 1): Promise<SearchResponse> {
    const url = `${env.baseUrl}?apikey=${env.apiKey}&s=${encodeURIComponent(title)}&page=${page}`;
    try {
      const response = await fetch(url);
      const data: SearchResponse = await response.json();
      return data;
    } catch (error) {
      console.error(`Error searching movies with title "${title}":`, error);
      throw error;
    }
  }
}
