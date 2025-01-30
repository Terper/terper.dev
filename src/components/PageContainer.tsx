import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <main className="min-h-[calc(100vh-60px)] max-w-5xl m-auto">
      {children}
    </main>
  );
};

export default PageContainer;
