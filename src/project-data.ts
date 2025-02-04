import hexasweper from "/assets/hexasweeper.png";
import battleGame from "/assets/battle-game.png";
import alandNews from "/assets/aland-news.png";
import casino from "/assets/casino.png";
import startsida from "/assets/startsida.png";
import lockify from "/assets/lockify.png";
import emmasflowers from "/assets/emmasflowers.png";

export const projects = [
  {
    name: "Hexasweeper",
    description: "A hexagonal minesweeper game.",
    url: "https://hexasweeper.terper.dev",
    repo: "https://github.com/terper/hexasweeper",
    image: hexasweper,
    skills: ["TypeScript", "React", "Tailwind CSS"],
  },
  {
    name: "Battle-game",
    description:
      "A command line battle game with saving and loading. A course project.",
    repo: "https://github.com/Terper/battle-game",
    image: battleGame,
    skills: ["Java"],
  },
  {
    name: "Lockify",
    description:
      'A "Spotify" clone with a focus on privacy. A course group project. My main focus was the playlist functionality.',
    repo: "https://github.com/Terper/lockify",
    url: "https://lockify.pages.dev/",
    image: lockify,
    skills: ["JavaScript", "Vue", "Tailwind CSS"],
  },
  {
    name: "Startpage",
    description:
      "A startpage with different widgets that connect to different APIs. A course project.",
    repo: "https://github.com/Terper/startsida",
    url: "https://wdbcms24-startpage.pages.dev/",
    image: startsida,
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Emma's Flowers",
    description: "A website for a fictional flower shop. A course project.",
    url: "https://terper.github.io/emmasflowers/",
    repo: "https://github.com/Terper/emmasflowers",
    image: emmasflowers,
    skills: ["HTML", "CSS"],
  },
  {
    name: "Casino",
    description: "A casino website. A course project.",
    repo: "https://github.com/Terper/casino",
    url: "https://people.arcada.fi/~totterja/casino/index.html",
    image: casino,
    skills: ["JavaScript", "CSS"],
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
    name: "Hjortens interna lunchbokning",
    description:
      "A booking system for teachers to book lunch for their student at the school restaurant. Exam project.",
    repo: "https://github.com/Terper/lunchbokning",
    skills: ["TypeScript", "React", "Tailwind CSS"],
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
