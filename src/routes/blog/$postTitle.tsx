import NotFound from "@/components/not-found";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$postTitle")({
  component: RouteComponent,
  loader(ctx) {
    const mdFile = new URL(`/blog/${ctx.params.postTitle}.md`, import.meta.url);
    if (mdFile.href.endsWith("undefined")) {
      return notFound();
    }
    return mdFile;
  },
  notFoundComponent: () => <NotFound />,
});

function RouteComponent() {
  const { postTitle } = Route.useParams();
  const mdFile = Route.useLoaderData();

  return <div>Hello "/blog/{postTitle}"!</div>;
}
