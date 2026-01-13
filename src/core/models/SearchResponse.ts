import type { MovieSummary } from "./MovieSummary";

export interface SearchResponse {
  Search: MovieSummary[];
  totalResults: string;
  Response: string;
  Error?: string;
}
