import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navlinks = [
    { label: "Home", url: "/" },
    // { label: "About", url: "/about" },
    { label: "Games", url: "/games" },
  ];

  return (
    <div className="bg-black p-5 text-white">
      <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center gap-8 md:gap-0">
        {/* Logo Section */}
        <div className="flex justify-center items-center md:justify-start">
          <div>
            <img src="/logo.png" alt="Logo" className="h-16 md:h-20" />
          </div>
        </div>

        {/* Slogan Section */}
        <div className="md:text-center w-full md:w-1/3">
          <p className="text-2xl md:text-4xl">
            NkyerƐkyerƐ fie; abofra sua de ne ho{" "}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center md:justify-start">
          <nav>
            <h1 className="font-semibold mb-2">Quick Links</h1>
            <ul className="flex flex-col gap-2 md:text-center">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="hover:text-gray-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="text-start md:text-right">
          <h1 className="font-semibold mb-2">Connect with Us</h1>
          <div className="flex md:justify-center  gap-4 py-3">
            <Twitter className="cursor-pointer hover:text-gray-400" />
            <Instagram className="cursor-pointer hover:text-gray-400" />
            <Facebook className="cursor-pointer hover:text-gray-400" />
          </div>
          <p>Email: info@akanfolkgames.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
