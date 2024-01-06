import { getCountry } from '../../api';

export const countryfacts = async (args: string[]): Promise<string> => {
  const country = args.join('+');

  if (!country) {
    return 'Usage: country [country name]. Example: country singapore';
  }

  const countryfacts = await getCountry(country);

  return countryfacts.country;
};
export const Countryfacts = countryfacts;
export const COUNTRYFACTS = countryfacts;
