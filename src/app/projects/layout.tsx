import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "terper.dev/projects",
  description: "A list of projects that I have made.",
};

const ProjectsLayout = (props: Props) => {
  return props.children;
};

export default ProjectsLayout;
