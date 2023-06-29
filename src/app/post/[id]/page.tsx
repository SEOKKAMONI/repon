"use client";

import Comment from "@/components/Comment";
import ButtonInput from "@/components/common/Input/ButtonInput";
import Layout from "@/components/common/Layout";
import color from "@/styles/color";
import font from "@/styles/font";
import { usePathname } from "next/navigation";
import { PostType } from "@/types";
import { db } from "@/db";
import { collection, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PostDetailScreen = () => {
  const [postDetailData, setPostDetailData] = useState<PostType>();
  const pathName = usePathname();
  const id = pathName.replace("/post/", "");

  console.log(id);

  const postCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPostDetail = async () => {
      const querySnapshot = await getDoc(doc(postCollectionRef, id));
      const data = querySnapshot.data();

      if (data) {
        const postDetail: PostType = {
          id: querySnapshot.id,
          comments: data.comments,
          content: data.content,
          name: data.name,
          title: data.title,
          link: data.link,
        };
        setPostDetailData(postDetail);
      }
    };
    getPostDetail();
  }, []);

  return (
    <Layout>
      <StyledPostDetailScreen>
        <PostDetailContents>
          <Name>{postDetailData?.name}</Name>
          <Title>{postDetailData?.title}</Title>
          <Content>{postDetailData?.content}</Content>
          <Reference>{postDetailData?.link}</Reference>
        </PostDetailContents>
        <CommentList>
          <Comment />
        </CommentList>
      </StyledPostDetailScreen>
      <CommentInputBox>
        <ButtonInput
          width="100%"
          placeholder="댓글을 입력해주세요."
          buttonText="입력"
          buttonClick={() => console.log("hi")}
        />
      </CommentInputBox>
    </Layout>
  );
};

export default PostDetailScreen;

const StyledPostDetailScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${color.gray50};
  padding: 16px 36px 36px;
`;

const PostDetailContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 36px;
`;

const Name = styled.span`
  ${font.caption}
  color: ${color.gray400};
  margin-bottom: 14px;
`;

const Title = styled.span`
  ${font.btn1}
  color: ${color.black};
  margin-bottom: 14px;
`;

const Content = styled.p`
  ${font.p3}
  color: ${color.gray900};
  margin-bottom: 14px;
`;

const Reference = styled.p`
  ${font.p3}
  color: ${color.maruDefault};
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentInputBox = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 64px;
  padding: 0px 36px;
  background-color: ${color.white};
`;
