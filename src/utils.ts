import { skills } from "./indexData";

const generateSkillArray = (skillArray: string[]) => {
  const output: { text: string; icon: string }[] = [];
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

export { generateSkillArray };
