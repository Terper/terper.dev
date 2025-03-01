"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  dark?: string;
  light: string;
  alt: string;
  className?: string;
  logoInvertLight?: boolean;
};

const ImageByTheme = (props: Props) => {
  const { theme } = useTheme();
  const [src, setSrc] = useState(props.light);

  useEffect(() => {
    setSrc(theme === "dark" ? props.dark ?? props.light : props.light);
  }, [theme, props.dark, props.light]);

  console.log(theme);
  return (
    <Image
      suppressHydrationWarning
      width={0}
      height={0}
      className={cn(
        `${props.logoInvertLight ? "invert dark:invert-0" : ""}`,
        props.className
      )}
      src={src}
      alt={props.alt}
    />
  );
};

export default ImageByTheme;
