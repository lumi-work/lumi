import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 mt-5 relative z-10">
      <nav className="flex items-center space-x-4">
        <Link
          href={"/team"}
          className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-200"
        >
          Team
        </Link>
      </nav>
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
      </div>

      <div>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
          Login
        </button>
      </div>
    </header>
  );
}
