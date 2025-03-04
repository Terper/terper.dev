"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {props.children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
