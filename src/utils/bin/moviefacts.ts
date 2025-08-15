import { getMovie } from '../../api';

export const moviefacts = async (args: string[]): Promise<string> => {
  const movie = args.join('+');

  if (!movie) {
    return 'Usage: moviefacts [movie name]. Example: movie avatar';
  }

  const countryfacts = await getMovie(movie);

  return countryfacts.movie;
};
export const Moviefacts = moviefacts;
export const MOVIEFACTS = moviefacts;
