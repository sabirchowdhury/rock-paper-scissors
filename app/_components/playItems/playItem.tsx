import Image from "next/image";
import rock from "./rock.svg";
import paper from "./paper.png";
import scissors from "./scissors.svg";
import lizard from "./lizard.svg";
import spock from "./spock.png";
import classNames from "classnames";

export enum TPlayOptions {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
  Lizard = "Lizard",
  Spock = "Spock",
}

export const playOptions = {
  [TPlayOptions.Rock]: { text: "Rock", src: rock },
  [TPlayOptions.Paper]: { text: "Paper", src: paper },
  [TPlayOptions.Scissors]: { text: "Scissors", src: scissors },
  [TPlayOptions.Lizard]: { text: "Lizard", src: lizard },
  [TPlayOptions.Spock]: { text: "Spock", src: spock },
};

interface TPlayItem {
  option: TPlayOptions;
  userChoice: TPlayOptions | undefined;
  setChoice: (opt: TPlayOptions) => void;
  updateComputerChoice: (newChoice: TPlayOptions) => void;
}

export default function PlayItem({
  option,
  setChoice,
  updateComputerChoice,
  userChoice,
}: TPlayItem) {
  return (
    <button
      className={classNames(
        "flex flex-col items-center p-2 rounded-xl hover:shadow-lg border-2",
        {
          "border-transparent": option !== userChoice,
        }
      )}
      onClick={() => {
        setChoice(option);
        updateComputerChoice(option);
      }}
    >
      <Image
        src={playOptions[option].src}
        className="h-16 w-16"
        alt={`play-item-button-${playOptions[option].text}`}
      />
      <p className="text-lg">{playOptions[option].text}</p>
    </button>
  );
}
