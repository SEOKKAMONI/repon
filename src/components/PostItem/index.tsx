import color from "@/styles/color";
import font from "@/styles/font";
import Column from "../common/Flex/Column";
import styled from "styled-components";

const PostItem = () => {
  return (
    <>
      <StyledPostItem>
        <Column gap="8px">
          <Title>모노레포 관련 레퍼런스 공유합니다</Title>
          <Content>
            모노레포와 멀티레포의 차이를 모르신다면 한번쯤은 읽어봐도
            좋을것같습니다모노레포와 멀티레포의 차이를 모르신다면 한번쯤은
            읽어봐도 좋을것같습니다
          </Content>
        </Column>
        <Name>익명의 한 학생</Name>
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
