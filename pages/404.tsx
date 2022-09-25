import Link from "next/link";
import { MdConstruction } from "react-icons/md";

export default function Error() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="flex flex-row gap-4 items-center text-3xl text-zima-50 font-bold">
        <div>Under construction </div>
        <span className="text-yellow-300">
          <MdConstruction />
        </span>
      </div>
      <Link href="/">
        <button className="mt-10 w-full text-lg xl:text-2xl p-3 text-zima-500 rounded-sm social hover:text-white">
          Go Home
        </button>
      </Link>
    </div>
  );
}
