import { Link } from "@tanstack/react-router";

const navItems = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Projects",
    to: "/projects",
  },
  {
    text: "Contact",
    to: "/contact",
  },
  {
    text: "About",
    to: "/about",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between p-4 sticky top-0">
      <a href="/">
        <h1 className="font-mono">terper.dev</h1>
      </a>
      <nav className="flex gap-8">
        {navItems.map((item, index) => (
          <Link to={item.to} key={index} className="font-mono">
            {item.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
