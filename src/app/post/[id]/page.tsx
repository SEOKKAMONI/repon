"use client";

import Comment from "@/components/Comment";
import ButtonInput from "@/components/common/Input/ButtonInput";
import Layout from "@/components/common/Layout";
import color from "@/styles/color";
import font from "@/styles/font";
import styled from "styled-components";

const PostDetailScreen = () => {
  return (
    <Layout>
      <StyledPostDetailScreen>
        <PostDetailContents>
          <Name>익명의 한 학생</Name>
          <Title>모노레포 관련 레퍼런스 공유합니다</Title>
          <Content>
            모노레포와 멀티레포의 차이를 모르신다면 한번쯤은 읽어봐도
            좋을것같습니다모노레포와 멀티레포의 차이를 모르신다면 한번쯤은
            읽어봐도 좋을것같습니다
          </Content>
          <Reference>
            Ref:
            https://velog.io/@april_5/CSS-ellipsis-%EB%A7%90%EC%A4%84%EC%9E%84-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
          </Reference>
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
