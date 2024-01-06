import { getJoke } from '../../api';

export const joke = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    const jokes = (await getJoke()).joke;
    return jokes;
  } else {
    output = args.join(' ');
    return output;
  }
};
export const Joke = joke;
export const JOKE = joke;