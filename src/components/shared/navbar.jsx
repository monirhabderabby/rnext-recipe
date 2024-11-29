import Image from "next/image";
import Link from "next/link";
import { icons } from "../ui/icons";

const Navbar = () => {
  return (
    <header class="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav class="flex justify-between items-center">
        <Link href="/" class="text-3xl font-bold">
          <Image src="/lws-kitchen.png" width={100} height={10} />
        </Link>
        <ul class="hidden md:flex space-x-6">
          <li>
            <Link href="/" class="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" class="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/recipe" class="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div class="flex items-center space-x-4">
          <Link href="#" class="hover:text-orange-500">
            {icons.search}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
