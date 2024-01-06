import { getQuote } from '../../api';

export const quoteoftheday = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    const quote = (await getQuote()).quote;
    return quote;
  } else {
    output = args.join(' ');
    return output;
  }
};
export const Quoteoftheday = quoteoftheday;
export const QUOTEOFTHEDAY = quoteoftheday;

