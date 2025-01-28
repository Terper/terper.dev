import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { GhRepos } from "../types/GhRepos";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: ["github repos"],
    queryFn: async (): Promise<GhRepos[]> => {
      const response = await fetch("https://api.github.com/users/Terper/repos");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return await data.sort(
        (a: GhRepos, b: GhRepos) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    },
  });

  if (query.data) {
    console.log(query.data);
  }

  return <div></div>;
}
