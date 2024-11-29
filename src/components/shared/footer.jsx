import Link from "next/link";

const links = [
  {
    id: crypto.randomUUID(),
    name: "LWS Kitchen",
    subLinks: [
      {
        id: crypto.randomUUID(),
        label: "About us",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Careers",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Contact us",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Feedback",
        href: "/",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Legal",
    subLinks: [
      {
        id: crypto.randomUUID(),
        label: "Terms",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Conditions",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Cookies",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Copyright",
        href: "/",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Follow",
    subLinks: [
      {
        id: crypto.randomUUID(),
        label: "Facebook",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Twitter",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Instagram",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        label: "Youtube",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-3xl font-bold">
              <img src="/lws-kitchen.png" className="h-10" />
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {links.map(({ id, name, subLinks }) => (
            <div key={id}>
              <h4 className="font-semibold mb-4">{name}</h4>
              <ul className="space-y-2">
                {subLinks.map(({ id, href, label }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-orange-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
