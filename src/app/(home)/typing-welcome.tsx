"use client";

import { useEffect, useState } from "react";

const texts = ["Hello", "Hej", "Hallo"];

const TypingWelcome = () => {
  const [index, setIndex] = useState(0);
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

  return <>{text}</>;
};

export default TypingWelcome;
