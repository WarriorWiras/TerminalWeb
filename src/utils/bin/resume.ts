import { getResume } from '../../api';

export const resume = async (args: string[]): Promise<string> => {
  const resume = await getResume();

  setTimeout(function () {
    window.open(`${resume}`);
  }, 1000);
  
  return 'Opening my resume... Please wait!';
};
export const Resume = resume;
export const RESUME = resume;


