"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import color from "@/styles/color";

interface PropsType {
  children: ReactNode;
  screenColor?: string;
}

const Layout = ({ children, screenColor = "#FFFFFF" }: PropsType) => {
  return (
    <StyledLayout style={{ backgroundColor: screenColor }}>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  position: relative;
  margin: auto;
  max-width: 540px;
  height: 100vh;
  overflow-y: auto;
`;
