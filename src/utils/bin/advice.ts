import { getAdvice } from '../../api';

export const advice = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    const advices = (await getAdvice('')).advice;
    return advices;
  } else {
    output = args.join(' ');
    return output;
  }

};

export const Advice = advice;
export const ADVICE = advice;
