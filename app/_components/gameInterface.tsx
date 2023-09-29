import classNames from "classnames";
import PlayItem, { TPlayOptions, playOptions } from "./playItems/playItem";
import { useState } from "react";
import Image from "next/image";
import {
  indexOfOptions,
  optionsIndex,
  scoreMap,
  attackPhrase,
} from "../_helpers/gameLogic";

interface TGameInterface {
  isStandardMode: Boolean;
}

export default function GameInterface({ isStandardMode }: TGameInterface) {
  const [isRandomMode, setIsRandomMode] = useState(true);
  const [choice, setChoice] = useState<TPlayOptions | undefined>();
  const [prevChoice, setPrevChoice] = useState<TPlayOptions | undefined>();
  const [score, setScore] = useState<[number, number]>([0, 0]);
  const [result, setResult] = useState<number | undefined>();
  const [computerChoice, setComputerChoice] = useState<
    TPlayOptions | undefined
  >();

  const updateComputerChoice = (newChoice: TPlayOptions) => {
    let newComputerChoice;
    if (!prevChoice || isRandomMode) {
      const choiceLimit = isStandardMode ? 3 : 5;
      const randChoice = Math.floor(Math.random() * choiceLimit);
      newComputerChoice = optionsIndex[randChoice];
    } else {
      newComputerChoice = prevChoice;
    }

    setComputerChoice(newComputerChoice);
    const newResult =
      scoreMap[indexOfOptions[newChoice]][indexOfOptions[newComputerChoice]];
    setResult(newResult);

    if (newResult === 1) {
      setScore((prevScore) => [prevScore[0] + 1, prevScore[1]]);
    } else if (newResult === -1) {
      setScore((prevScore) => [prevScore[0], prevScore[1] + 1]);
    }
    setPrevChoice(newChoice);
  };

  // update Draw logic
  return (
    <div className="flex flex-col items-center p-2">
      <p className="text-gray-700">{`User: ${score[0]} | Computer: ${score[1]}`}</p>

      <p className="-mb-3 mt-2 bg-white rounded-md px-2 z-10">Computer:</p>
      <div className="flex flex-col justify-center items-center h-48 w-48 rounded-xl border-2">
        {computerChoice && (
          <>
            <Image
              className="h-32 w-32"
              src={playOptions[computerChoice].src}
              alt="computers-symbol"
            />
            <p>{computerChoice}</p>
          </>
        )}
      </div>
      <div className="flex my-2 gap-2 text-sm">
        <ComputerMode
          text="Random Mode"
          selected={isRandomMode}
          onClick={() => setIsRandomMode(true)}
        />
        <ComputerMode
          text="Last Choice Mode"
          selected={!isRandomMode}
          onClick={() => setIsRandomMode(false)}
        />
      </div>
      <p
        className={classNames("text-3xl my-4 text-center", {
          "text-green-800": result == 1,
          "text-red-800": result == -1,
        })}
      >
        {attackPhrase(choice, computerChoice, result)}
      </p>
      <div className="flex mt-2 gap-4 flex-wrap justify-center">
        <PlayItem
          option={TPlayOptions.Rock}
          setChoice={setChoice}
          updateComputerChoice={updateComputerChoice}
          userChoice={choice}
        />
        <PlayItem
          option={TPlayOptions.Paper}
          setChoice={setChoice}
          updateComputerChoice={updateComputerChoice}
          userChoice={choice}
        />
        <PlayItem
          option={TPlayOptions.Scissors}
          setChoice={setChoice}
          updateComputerChoice={updateComputerChoice}
          userChoice={choice}
        />
        {!isStandardMode && (
          <>
            <PlayItem
              option={TPlayOptions.Lizard}
              setChoice={setChoice}
              updateComputerChoice={updateComputerChoice}
              userChoice={choice}
            />
            <PlayItem
              option={TPlayOptions.Spock}
              setChoice={setChoice}
              updateComputerChoice={updateComputerChoice}
              userChoice={choice}
            />
          </>
        )}
      </div>
    </div>
  );
}

interface TComputerMode extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: String;
  selected?: Boolean;
}

const ComputerMode = ({ text, selected, ...props }: TComputerMode) => (
  <button
    className={classNames("p-1 w-36 rounded-md text-white", {
      "bg-gray-700": !selected,
      "bg-green-800": selected,
    })}
    {...props}
  >
    {text}
  </button>
);
