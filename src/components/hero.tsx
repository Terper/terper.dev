import { ctaButtons, socialLinks } from "@/index-data";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-blue-300 to-purple-400">
      <div className="max-w-5xl m-auto px-4 py-16 md:py-24 lg:py-32 xl:py-48 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          Hello
          <div className="animate-waving-hand inline-block origin-[70%_70%]">
            👋
          </div>
        </h1>
        <p className="text-lg">
          I'm Jann, also known as Terper online.
          <br />
          Programming enthusiast and soon to be engineer.
        </p>
        <div className="flex gap-2 flex-wrap">
          {ctaButtons.map((cta, index) => (
            <Button
              key={index}
              asChild
              variant={index % 2 == 0 ? "default" : "secondary"}
            >
              <Link to={cta.to} className="text-lg">
                {cta.text}
              </Link>
            </Button>
          ))}
          {socialLinks.map((link, index) => (
            <Button key={index} asChild size="icon" variant="secondary">
              <Link to={link.url} target="_blank" className="">
                {link.logo}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
