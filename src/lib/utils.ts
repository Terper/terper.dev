import { skills } from "@/app/data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const generateSkillArray = (skillArray: string[]) => {
  const output: { text: string; icon: string; darkIncompatible?: boolean }[] =
    [];
  skillArray.forEach((skill) => {
    skills.forEach((category) => {
      category.items.forEach((item) => {
        if (item.text === skill) {
          output.push(item);
        }
      });
    });
  });
  return output;
};

export { cn, generateSkillArray };
