import { getNumber } from '../../api';

export const numberfacts = async (args: string[]): Promise<string> => {
  const num = args.join('+');

  if (!num) {
    return `Please select a number of your choice in the format shown below:
    
    numberfacts [your number]
    
    P.S. It could be your favourite number :)`;
  }

  const numberfacts = await getNumber(num);

  return numberfacts;
};
export const Numberfacts = numberfacts;
export const NumberFacts = numberfacts;
export const NUMBERFACTS = numberfacts;