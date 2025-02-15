import { ctaButtons, socialLinks } from "@/index-data";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const texts = ["Hello", "Hej", "Hallo"];
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50); // Deletion speed
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => {
          setText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 200); // Typing speed
      } else {
        setTimeout(() => setIsDeleting(true), 5000); // Wait before deleting
      }
    }
  }, [charIndex, isDeleting, index]);

  return (
    <section className="bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-blue-300 to-purple-400">
      <div className="max-w-5xl m-auto px-4 py-16 md:py-24 lg:py-32 xl:py-48 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          {text}
          <span className="animate-blink font-thin">|</span>
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
