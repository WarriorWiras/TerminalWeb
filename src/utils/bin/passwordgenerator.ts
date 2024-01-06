import { GetPassword } from '../../api';

export const password = async (args: string[]): Promise<string> => {
  const num = args[0];
  const len = args[1];

  if (!num || !len) {
    return `Please put in this format: password [Number of password you want to generate. i.e. 5 different password] [Length of the password i.e. 12 characters]
    
Example: password 7 12

Password can only take in Minimum of 6 & Maximum of 32`;
  }

  const password = await GetPassword(num, len);

  return password;
};
export const Password = password;
export const PASSWORD = password;
