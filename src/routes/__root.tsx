import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import NotFound from "../components/not-found";
import { Suspense } from "react";
import { TanStackRouterDevtools } from "../dev-tools";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <div className="min-h-screen">
        <Header />
        <main className="">
          <Outlet />
        </main>
      </div>
      <Footer />
      <Toaster />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
  notFoundComponent: () => <NotFound />,
});
