import { getMovie } from '../../api';

export const movie = async (args: string[]): Promise<string> => {
  const movie = args.join('+');

  if (!movie) {
    return 'Usage: movie [movie name]. Example: movie avatar';
  }

  const countryfacts = await getMovie(movie);

  return countryfacts.movie;
};
export const Movie = movie;
export const MOVIE = movie;
