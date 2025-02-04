import { experience } from "@/index-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { generateSkillArray } from "@/utils";
import { Badge } from "./ui/badge";
import { useTheme } from "./theme-provider";
import { Link } from "@tanstack/react-router";

const Experience = () => {
  const { theme } = useTheme();
  return (
    <section>
      <div className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
        <h2 className="text-3xl">Experience</h2>
        <div className="flex flex-col gap-4">
          {experience.map((item, index) => (
            <Card key={index}>
              <CardHeader className="sm:flex-row justify-between gap-4 items-start space-y-0">
                <div>
                  <CardTitle>
                    <Link
                      to={item.link}
                      className="text-xl hover:underline"
                      target="_blank"
                    >
                      {item.company}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-lg flex flex-col">
                    <span>{item.role}</span>
                    <span>
                      {item.from} - {item.to}
                    </span>
                  </CardDescription>
                </div>
                <div className="">
                  {theme === "dark" ? (item.logoDark ?? item.logo) : item.logo}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between flex-col gap-4 md:flex-row">
                  <p className="max-w-lg">{item.description}</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-start">
                <div className="flex justify-end flex-wrap gap-2 self-end">
                  {generateSkillArray(item.skills).map((skill, index) => (
                    <Badge variant="outline" key={index} className="flex gap-2">
                      <img
                        className="w-4 h-4 m-1"
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                      />
                      <span className="text-nowrap text-2xs">{skill.text}</span>
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
