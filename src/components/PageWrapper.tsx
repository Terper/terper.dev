import { ReactNode } from "react";
import useHeaderHeight from "../hooks/useHeaderHeight";

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  const headerHeight = useHeaderHeight();

  return (
    <main className={`min-h-[calc(100vh-${headerHeight}px)]`}>{children}</main>
  );
};

export default PageWrapper;
