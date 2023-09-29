import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href={"/"}
      className="absolute left-10 top-5 text-xl font-semibold hover:text-gray-600"
    >
      {"< Home"}
    </Link>
  );
}
