"use client";

import Layout from "@/components/common/Layout";
import PostItem from "@/components/PostItem";
import color from "@/styles/color";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Layout>
      <StyledHomeScreen>
        <PostList>
          <PostItem />
          <PostItem />
        </PostList>
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
  background-color: ${color.gray50};
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 36px 36px;
`;
