import { Link } from "@tanstack/react-router";
import { navItems } from "../navItems";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-4 text-white">
      <div className="flex flex-col gap-4">
        <Link to="/" className="font-mono">
          terper.dev
        </Link>
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <Link to={item.to} key={index}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
