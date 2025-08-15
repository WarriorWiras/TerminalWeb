import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  const bio = await getBio();
  
  return bio;
};

export const About = about;
export const ABOUT = about;