import { TPlayOptions } from "../_components/playItems/playItem";

export const optionsIndex = [
  TPlayOptions.Rock,
  TPlayOptions.Paper,
  TPlayOptions.Scissors,
  TPlayOptions.Lizard,
  TPlayOptions.Spock,
];

export const indexOfOptions = {
  [TPlayOptions.Rock]: 0,
  [TPlayOptions.Paper]: 1,
  [TPlayOptions.Scissors]: 2,
  [TPlayOptions.Lizard]: 3,
  [TPlayOptions.Spock]: 4,
};

export const scoreMap = [
  [0, -1, 1, 1, -1],
  [1, 0, -1, -1, 1],
  [-1, 1, 0, 1, -1],
  [-1, 1, -1, 0, 1],
  [1, -1, 1, -1, 0],
];

const attackPhrases = [
  ["", "covers", "crushes", "crushes", "vapourises"],
  ["covers", "", "cuts", "eats", "disproves"],
  ["crushes", "cuts", "", "decapitates", "smashes"],
  ["crushes", "eats", "decapitates", "", "poisons"],
  ["vapourises", "disproves", "smashes", "poisons", ""],
];

export const attackPhrase = (
  userChoice: TPlayOptions | undefined,
  computerChoice: TPlayOptions | undefined,
  result: number | undefined
) => {
  if (!!userChoice && !!computerChoice) {
    const currentAttackPhrase =
      attackPhrases[indexOfOptions[userChoice]][indexOfOptions[computerChoice]];

    if (result === 1) {
      return `${userChoice} ${currentAttackPhrase} ${computerChoice.toLowerCase()}. You Won! 🎉`;
    }
    if (result === 0) {
      return "Draw!";
    }
    if (result === -1) {
      return `${computerChoice} ${currentAttackPhrase} ${userChoice.toLowerCase()}. You Lost! ☹`;
    }
  }
  return "Make your selection below";
};
