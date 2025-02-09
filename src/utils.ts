import { skills } from "./index-data";

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

const generateBlogDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

export { generateSkillArray, generateBlogDate };
