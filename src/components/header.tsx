import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import { navItems } from "@/nav-items";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="flex justify-between items-center py-2 z-50 max-w-5xl m-auto">
        <Link to="/" className="ml-4 z-50">
          <h1 className="text-lg font-bold font-mono">terper.dev</h1>
        </Link>
        <div className="flex items-center gap-4">
          <nav
            className={`absolute inset-0 flex flex-col h-dvh items-center justify-center gap-4 transition-all duration-300 transform ${
              isMenuOpen
                ? "opacity-100 visible z-40 md:z-50 bg-background md:bg-transparent text-xl md:text-base translate-y-0"
                : "opacity-0 invisible md:opacity-100 md:visible -translate-y-full md:translate-y-0"
            } md:flex-row md:inset-auto md:relative md:h-auto`}
          >
            {navItems.map((item, index) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={index}
                to={item.to}
                className="transition-colors hover:text-foreground/80 [&.active]:text-foreground text-foreground/60"
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <div className="mr-2 z-50">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-2"
            >
              <div
                className={`transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
              >
                {isMenuOpen ? <X></X> : <Menu></Menu>}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
