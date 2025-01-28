import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return <div className="min-h-[calc(100vh-56px)]">{children}</div>;
};

export default PageContainer;
