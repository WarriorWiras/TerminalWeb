const websiteName = "Muhd Wafiyuddin CLI Website";

const msginfo = `Welcome to ${websiteName}!! 
This website consists of my portfolio, perhaps more than the GUI Website. \n
Type "help" to get started!\n
Hope you have fun :)`;

export const info = async (args: string[]): Promise<string> => {
  
  
  return msginfo;
};

export const Info = info;
export const INFO = info;