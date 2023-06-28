"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";

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
  margin: auto;
  max-width: 540px;
  height: 100vh;
  border: 1px solid black;
  overflow-y: auto;
`;
