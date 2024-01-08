import { getreadme } from '../../api';

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getreadme();
  
  return readme;
};

export const Readme = readme;
export const README = readme;