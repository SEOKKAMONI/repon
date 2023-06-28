"use client";

import GlobalStyle from "@/styles/global";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Provider;
