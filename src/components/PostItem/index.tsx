import color from "@/styles/color";
import font from "@/styles/font";
import Column from "../common/Flex/Column";
import styled from "styled-components";
import { PostType } from "@/types";
import { useRouter } from "next/navigation";

const PostItem = (props: PostType) => {
  const router = useRouter();

  return (
    <>
      <StyledPostItem onClick={() => router.push(`/post/${props.id}`)}>
        <Column gap="8px">
          <Title>{props.title}</Title>
          <Content>{props.content}</Content>
        </Column>
        <Name>{props.name}</Name>
      </StyledPostItem>
      <Line />
    </>
  );
};

export default PostItem;

const StyledPostItem = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${color.gray200};
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const Line = styled.div`
  border: 1px solid ${color.gray200};
  width: 100%;
`;

const Title = styled.span`
  ${font.btn1}
  color: ${color.black};
`;

const Content = styled.span`
  ${font.p3}
  color: ${color.gray900};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-bottom: 14px;
`;

const Name = styled.span`
  ${font.caption}
  color: ${color.gray400};
`;
