import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface TMenuButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  nav: string;
}

export default function MenuButton({
  buttonText,
  className,
  nav,
  ...props
}: TMenuButton) {
  return (
    <Link href={nav}>
      <button
        {...props}
        className={`bg-gray-900 text-white p-4 w-96 text-xl hover:bg-yellow-600 ${className}`}
      >
        {buttonText}
      </button>{" "}
    </Link>
  );
}
