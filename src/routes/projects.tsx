import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/project-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { generateSkillArray } from "@/utils";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
      <h2 className="text-3xl">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{project.name}</CardTitle>
              <CardDescription className="text-lg">
                {project.description}
              </CardDescription>
              <CardContent className="flex gap-2 flex-col">
                <img
                  src={project.image}
                  alt={"Image of " + project.name}
                  className="mt-4"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button asChild>
                    <Link to={project.url} target="_blank">
                      Website
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to={project.repo} target="_blank">
                      <Github />
                      Repository
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {generateSkillArray(project.skills).map((skill, index) => (
                    <Badge variant="outline" key={index} className="flex gap-2">
                      <img
                        className="w-4 h-4 m-1"
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                      />
                      <span className="text-nowrap">{skill.text}</span>
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
