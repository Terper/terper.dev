import Hexasweeper from "../../../public/hexasweeper.png";
import Lunchbokning from "../../../public/lunchbokning.png";
import BattleGame from "../../../public/battle-game.png";
import Lockify from "../../../public/lockify.png";
import Emmasflowers from "../../../public/emmasflowers.png";
import Casino from "../../../public/casino.png";
import Startsida from "../../../public/startsida.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { generateSkillArray } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Hexasweeper",
    description: "A hexagonal minesweeper game.",
    url: "https://hexasweeper.terper.dev",
    repo: "https://github.com/terper/hexasweeper",
    image: Hexasweeper,
    skills: ["TypeScript", "React", "Tailwind CSS"],
  },
  {
    name: "Hjortens interna lunchbokning",
    description:
      "A booking system for teachers to book lunch for their student at Hotell- and Restaurangskola. Exam project.",
    repo: "https://github.com/Terper/lunchbokning",
    image: Lunchbokning,
    skills: ["TypeScript", "React", "Tailwind CSS"],
  },
  {
    name: "Battle-game",
    description:
      "A command line battle game with saving and loading. A course project.",
    repo: "https://github.com/Terper/battle-game",
    image: BattleGame,
    skills: ["Java"],
  },
  {
    name: "Lockify",
    description:
      'A "Spotify" clone with a focus on privacy. A course group project. My main focus was the playlist functionality.',
    repo: "https://github.com/Terper/lockify",
    url: "https://lockify.pages.dev/",
    image: Lockify,
    skills: ["JavaScript", "Vue", "Tailwind CSS"],
  },
  {
    name: "Emma's Flowers",
    description: "A website for a fictional flower shop. A course project.",
    url: "https://terper.github.io/emmasflowers/",
    repo: "https://github.com/Terper/emmasflowers",
    image: Emmasflowers,
    skills: ["HTML", "CSS"],
  },
  {
    name: "Casino",
    description: "A casino website. A course project.",
    repo: "https://github.com/Terper/casino",
    url: "https://people.arcada.fi/~totterja/casino/index.html",
    image: Casino,
    skills: ["JavaScript", "CSS"],
  },
  {
    name: "Startpage",
    description:
      "A startpage with different widgets that connect to different APIs. A course project.",
    repo: "https://github.com/Terper/startsida",
    url: "https://wdbcms24-startpage.pages.dev/",
    image: Startsida,
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Startpage-API",
    description:
      "A API for the startpage that communicates with a PostgreSQL database. A course project.",
    repo: "https://github.com/Terper/startsida-api",
    skills: ["Python", "Flask", "PostgreSQL"],
  },
  {
    name: "Datingsite",
    description:
      "A dating site connected to a MySQL database. A course project.",
    repo: "https://github.com/Terper/datingsite",
    skills: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    name: "Tic-Tac-Toe",
    description: "A command line based tic-tac-toe game. A course project.",
    repo: "https://github.com/Terper/Tic-Tac-Toe",
    skills: ["Java"],
  },
  {
    name: "Åland News API",
    description: "An api for fetching news from Ålands different news sources.",
    repo: "https://github.com/Terper/aland-news",
    skills: ["TypeScript", "Bun"],
  },
  {
    name: "python-minesweeper",
    description: "A minesweeper game made with Pygame.",
    repo: "https://github.com/Terper/python-minesweeper",
    skills: ["Python"],
  },
];

const Projects = () => {
  return (
    <section className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
      <h2 className="text-3xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="">
            <CardHeader>
              <CardTitle className="text-xl">{project.name}</CardTitle>
              <CardDescription className="text-lg">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 flex-col flex-grow">
              {project.image && (
                <Image
                  width={0}
                  height={0}
                  src={project.image}
                  alt={"Image of " + project.name}
                  className="mt-4 max-h-64 w-auto object-contain"
                />
              )}
              <div className="flex gap-2">
                {project.url && (
                  <Button asChild>
                    <Link href={project.url} target="_blank">
                      <Globe />
                      Website
                    </Link>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <Link href={project.repo} target="_blank">
                    <Github />
                    Repository
                  </Link>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <div className="flex gap-2 flex-wrap justify-end">
                {generateSkillArray(project.skills).map((skill, index) => (
                  <Badge variant="outline" key={index} className="flex gap-2">
                    <Image
                      width={0}
                      height={0}
                      alt={`Logo of ${skill.text}`}
                      className={`w-4 h-4 m-1 ${
                        skill.darkIncompatible
                          ? "dark:invert selection:invert-0"
                          : ""
                      }`}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                    />
                    <span className="text-nowrap">{skill.text}</span>
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
