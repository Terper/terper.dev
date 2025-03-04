import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "terper.dev/contact",
  description: "Contact me by filling out the form or send me an email.",
};

const ContactLayout = (props: Props) => {
  return props.children;
};

export default ContactLayout;
