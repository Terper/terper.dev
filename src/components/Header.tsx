import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { navItems } from "../navItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between sticky top-0 bg-white z-100 items-center max-w-5xl m-auto">
      <Link to="/" className="z-100 p-4" onClick={() => setIsOpen(false)}>
        <h1 className="font-mono text-xl">terper.dev</h1>
      </Link>
      <nav>
        <div
          className={`gap-8 p-4 ${isOpen ? "flex flex-col absolute items-center justify-center inset-0 h-screen bg-white md:flex-row md:inset-auto md:relative md:items-start" : "hidden md:flex"}`}
        >
          {navItems.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              className="font-mono [&.active]:underline"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative cursor-pointer p-4"
        >
          {isOpen ? (
            <XMarkIcon className="size-6 text-black" />
          ) : (
            <Bars3Icon className="size-6 text-black" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
