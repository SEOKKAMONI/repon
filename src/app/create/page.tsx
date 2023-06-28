"use client";

import Button from "@/components/common/Button";
import Column from "@/components/common/Flex/Column";
import Input from "@/components/common/Input";
import Layout from "@/components/common/Layout";
import color from "@/styles/color";
import styled from "styled-components";

const CreateScreen = () => {
  return (
    <Layout>
      <StyledCreateScreen>
        <Column gap="24px" width="100%">
          <Input
            placeholder="제목을 입력해주세요."
            width="100%"
            msg="어그로 끌리도록 입력해주세요."
            name="title"
          />
          <Input
            placeholder="내용을 입력해주세요."
            width="100%"
            msg="간략하게 입력해주세요."
            name="content"
          />
          <Input
            placeholder="닉네임을 입력해주세요."
            width="100%"
            msg="간지나게 입력해주세요."
            name="name"
          />
          <Input
            placeholder="레퍼런스를 입력해주세요."
            width="100%"
            msg="링크를 입력해주세요."
            name="link"
          />
          <Button>공유하기</Button>
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
