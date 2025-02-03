import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Education />
    </>
  );
}
