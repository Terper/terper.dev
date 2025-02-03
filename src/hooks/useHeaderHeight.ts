import { useEffect, useState } from "react";

const useHeaderHeight = () => {
  const [headerHeight, setheaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setheaderHeight(header.clientHeight);
    }
  }, []);

  return headerHeight;
};

export default useHeaderHeight;
