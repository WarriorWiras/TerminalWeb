import { GetPassStrength } from '../../api';

export const checkpassword = async (args: string[]): Promise<string> => {

  const password = args.join('+');

  if (!password){
    return `Please enter a password in this format: checkpassword [your_password]`;
  }

  const passwordchecker = await GetPassStrength(password);

  return passwordchecker.message;
};
export const Checkpassword = checkpassword;
export const CHECKPASSWORD = checkpassword;
