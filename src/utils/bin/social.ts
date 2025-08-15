import config from '../../../config.json';
import packageJson from '../../../package.json';

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return 'Opening instagram...';
};
export const Instragram = instagram;
export const INSTRAGRAM = instagram;

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};
export const Github = github;
export const GITHUB = github;

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};
export const Linkedin = linkedin
export const LINKEDIN = linkedin;

export const gui = async (args: string[]): Promise<string> => {
  window.open(`${packageJson.author.url}`);

  return 'Opening GUI Website Version...';
};
export const Gui = gui;
export const GUI = gui;
