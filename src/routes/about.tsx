import { createFileRoute } from "@tanstack/react-router";
import PageWrapper from "../components/PageWrapper";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageWrapper>Hello "/about"!</PageWrapper>;
}
