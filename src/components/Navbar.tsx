import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navlinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Games",
      url: "/games",
    },
  ];
  const locations = [
    { label: "Akyem", id: "akyem" },
    { label: "Asante", id: "asante" },
    { label: "Bono", id: "bono" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-5 md:px-10 lg:px-20 bg-black text-white">
        <Link to="/">
          <div>
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>
        </Link>
        <div className="hidden md:flex">
          <nav>
            <ul className="flex gap-5">
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
        {/* Desktop Dropdown */}
        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-black bg-white text-sm px-6 py-3 rounded-lg hover:bg-gray-200">
                Community
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-lg mt-2 text-black w-64 py-3">
              {locations.map((location) => (
                <DropdownMenuItem
                  key={location.id}
                  className="px-6 py-4 text-lg hover:bg-gray-100 cursor-pointer"
                >
                  <Link to={`/locations/${location.id}`}>{location.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-85 backdrop-blur-2xl text-white absolute w-full">
          <nav>
            <ul className="flex flex-col gap-4 px-5 py-4">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-5 py-2">
            {/* Mobile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-white w-full text-black text-lg px-6 py-3 rounded-lg hover:bg-gray-200">
                  Community
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-lg mt-2 text-black w-64 py-3">
                {locations.map((location) => (
                  <DropdownMenuItem
                    key={location.id}
                    className="px-6 py-4 text-lg hover:bg-gray-100 cursor-pointer"
                  >
                    <Link to={`/locations/${location.id}`}>
                      {location.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
