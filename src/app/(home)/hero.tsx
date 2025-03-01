import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import TypingWelcome from "./typing-welcome";

const Hero = () => {
  const ctaButtons = [
    {
      text: "See what I have done",
      to: "/projects",
    },
    {
      text: "Get in touch",
      to: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      logo: <Github />,
      url: "https://github.com/Terper",
    },
    {
      name: "LinkedIn",
      logo: <Linkedin />,
      url: "https://www.linkedin.com/in/jann-totterman/",
    },
  ];

  return (
    <section className="bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-blue-300 to-purple-400">
      <div className="max-w-5xl m-auto px-4 py-16 md:py-24 lg:py-32 xl:py-48 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          <TypingWelcome />
          <span className="animate-blink font-thin">|</span>
          <div className="animate-wave inline-block origin-[70%_70%]">👋</div>
        </h1>
        <p className="text-lg">
          I&apos;m Jann, also known as Terper online.
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
              <Link href={cta.to} className="text-lg">
                {cta.text}
              </Link>
            </Button>
          ))}
          {socialLinks.map((link, index) => (
            <Button key={index} asChild size="icon" variant="secondary">
              <Link href={link.url} target="_blank" className="">
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
