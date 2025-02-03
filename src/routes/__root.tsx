import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import { Suspense } from "react";
import { TanStackRouterDevtools } from "../devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
  notFoundComponent: () => <NotFound />,
});
