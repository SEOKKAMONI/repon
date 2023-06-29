"use client";

import Layout from "@/components/common/Layout";
import PostItem from "@/components/PostItem";
import color from "@/styles/color";
import styled from "styled-components";
import { db } from "@/db";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { PostType } from "@/types";

const HomeScreen = () => {
  const [replePostData, setReplePostData] = useState<PostType[]>();
  const postCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPost = async () => {
      const querySnapshot = await getDocs(postCollectionRef);
      const postData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          comments: data.comments,
          content: data.content,
          name: data.name,
          title: data.title,
        };
      });
      setReplePostData(postData);
    };
    getPost();
  }, []);

  return (
    <Layout>
      <StyledHomeScreen>
        <PostList>
          {replePostData?.map((item) => (
            <PostItem {...item} />
          ))}
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
