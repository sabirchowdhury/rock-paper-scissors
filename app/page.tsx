import Image from "next/image";
import MenuButton from "./_components/menuButton";
import icon from "./favicon.ico";

export default function Home() {
  return (
    <main className="flex flex-col text-center justify-center items-center p-10 h-screen w-screen">
      <Image
        src={icon}
        alt="Rock paper scissors icon"
        width="100"
        height="100"
      />
      <h1 className="font-light text-5xl mt-5">Rock Paper Scissors</h1>
      <div className="flex flex-col my-10">
        <MenuButton
          nav="standard"
          buttonText="Standard Mode"
          className="rounded-t-xl"
        />
        <MenuButton
          nav="special"
          buttonText="Lizard-Spock Expansion"
          className="rounded-b-xl"
        />
      </div>
    </main>
  );
}
