"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icons } from "../ui/icons";

const navLinks = [
  {
    id: crypto.randomUUID(),
    label: "Home",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    label: "Categories",
    href: "/categories",
  },
  {
    id: crypto.randomUUID(),
    label: "Latest Recipes",
    href: "/latest",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          <Image src="/lws-kitchen.png" width={100} height={10} alt="Logo" />
        </Link>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ id, href, label }) => (
            <li key={id}>
              <Link
                href={href}
                className={`hover:text-orange-500 ${
                  pathName === href && "text-orange-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
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
