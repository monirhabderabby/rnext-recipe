import Image from "next/image";
import Link from "next/link";
import { icons } from "../ui/icons";

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          <Image src="/lws-kitchen.png" width={100} height={10} alt="Logo" />
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/recipe" className="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-orange-500">
            {icons.search}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
