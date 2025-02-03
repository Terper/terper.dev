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
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.link}
                      className="text-xl hover:underline"
                      target="_blank"
                    >
                      {item.company}
                    </Link>
                    <span>
                      {item.from} - {item.to}
                    </span>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg">
                  {item.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between flex-col gap-4 md:flex-row">
                  {theme === "dark" ? (item.logoDark ?? item.logo) : item.logo}
                  <p className="max-w-lg">{item.description}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end flex-wrap-reverse gap-2">
                {generateSkillArray(item.skills).map((skill, index) => (
                  <Badge variant="outline" key={index} className="flex gap-2">
                    <img
                      className="w-4 h-4 m-1"
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                    />
                    <span className="text-nowrap">{skill.text}</span>
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
