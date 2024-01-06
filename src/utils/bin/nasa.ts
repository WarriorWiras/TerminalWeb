import { getNasa } from '../../api';

export const nasa = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    const nasa = (await getNasa()).nasa;
      return nasa;
  } else {
    output = args.join(' ');
    return output;
  }
};

// Exporting as Nasa and NASA (case-sensitive)
export const Nasa = nasa;
export const NASA = nasa;