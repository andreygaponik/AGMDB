interface Country {
  country: string;
}

interface Genre {
  genre: string;
}

export interface Movie {
  // countries: { country: string }[];
  countries: Country[];
  coverUrl: string;
  description: string;
  genres: Genre[];
  imdbId: string;
  kinopoiskId: number;
  logoUrl: string;
  nameEn: string | null;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingAgeLimits: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: string;
  year: number;
}

export interface MoviesResponse {
  total: number;
  totalPages: number;
  items: Movie[];
}
