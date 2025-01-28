import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NotFound />,
});
