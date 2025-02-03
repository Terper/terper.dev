import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return <main className="min-h-[calc(100vh-60px)]">{children}</main>;
};

export default PageWrapper;
