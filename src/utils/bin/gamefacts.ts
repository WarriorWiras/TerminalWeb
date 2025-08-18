import { getGame } from "../../api";

export const gamefacts = async (args: string[]): Promise<string> => {
  const game = args.join('-');

  if (!game) {
       return 'Usage: gamefacts [game name]. Example: gamefacts The Witcher 3';
  }

  const gameDetails = await getGame(game);
  return gameDetails.game;
};

export const Gamefacts = gamefacts;
export const GAMEFACTS = gamefacts;

