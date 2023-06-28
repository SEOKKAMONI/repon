"use client";

import Layout from "@/components/common/Layout";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Layout>
      <StyledHomeScreen>
        <Banner />
        <PostList></PostList>
      </StyledHomeScreen>
    </Layout>
  );
};

export default HomeScreen;

const StyledHomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Banner = styled.img`
  height: 150px;
  width: 100%;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
`;
