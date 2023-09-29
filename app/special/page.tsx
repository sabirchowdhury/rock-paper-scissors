"use client";

import Image from "next/image";
import icon from "../favicon.ico";
import HomeButton from "../_components/homeButton";
import GameInterface from "../_components/gameInterface";

export default function Special() {
  return (
    <main className="flex relative flex-col items-center p-4 h-screen w-screen">
      <HomeButton />
      <div className="flex md:mt-0 mt-12 items-center ">
        <Image
          src={icon}
          alt="Rock paper scissors icon"
          width="50"
          height="50"
        />
        <h1 className=" mx-4 md:text-3xl text-2xl">Lizard Spock Expansion</h1>
      </div>
      <GameInterface isStandardMode={false} />
    </main>
  );
}
