"use client";

import Button from "@/components/common/Button";
import Column from "@/components/common/Flex/Column";
import Input from "@/components/common/Input";
import Layout from "@/components/common/Layout";
import color from "@/styles/color";
import { ChangeEventHandler, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";
import { db } from "@/db";
import { useRouter } from "next/navigation";
import { PostType } from "@/types";

const createPost = async (postData: PostType) => {
  const postCollectionRef = collection(db, "post");

  try {
    await addDoc(postCollectionRef, postData);
  } catch (e) {
    console.log(e);
  }
};

const CreateScreen = () => {
  const router = useRouter();
  const [postData, setPostData] = useState<PostType>({
    title: "",
    content: "",
    name: "",
    link: "",
    comments: [],
  });

  const handlPostData: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const create = () => {
    createPost(postData);
    router.push("/");
  };

  return (
    <Layout>
      <StyledCreateScreen>
        <Column gap="24px" width="100%">
          <Input
            placeholder="제목을 입력해주세요."
            width="100%"
            msg="어그로 끌리도록 입력해주세요."
            name="title"
            onChange={handlPostData}
          />
          <Input
            placeholder="내용을 입력해주세요."
            width="100%"
            msg="간략하게 입력해주세요."
            name="content"
            onChange={handlPostData}
          />
          <Input
            placeholder="닉네임을 입력해주세요."
            width="100%"
            msg="간지나게 입력해주세요."
            name="name"
            onChange={handlPostData}
          />
          <Input
            placeholder="레퍼런스를 입력해주세요."
            width="100%"
            msg="링크를 입력해주세요."
            name="link"
            onChange={handlPostData}
          />
          <Button onClick={create}>공유하기</Button>
        </Column>
      </StyledCreateScreen>
    </Layout>
  );
};

export default CreateScreen;

const StyledCreateScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${color.gray50};
  padding: 16px 36px 36px;
`;
