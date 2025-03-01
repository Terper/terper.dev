import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "../data";
import Image from "next/image";

const Skills = () => {
  return (
    <section>
      <div className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
        <h2 className="text-3xl">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card key={index} className="lg:h-fit">
              <CardHeader>
                <CardTitle className="text-xl">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
                  {skill.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col gap-2 justify-center items-center"
                    >
                      <Image
                        className={`w-8 h-8 ${
                          item.darkIncompatible
                            ? "dark:invert selection:invert-0"
                            : ""
                        }`}
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`}
                        alt={`Logo of ${item.text}`}
                        width="0"
                        height="0"
                      />
                      <span className="text-sm text-nowrap">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
