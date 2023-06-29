import font from "@/styles/font";
import color from "@/styles/color";
import styled from "styled-components";

interface PropsType {
  content: string;
}

const Comment = ({ content }: PropsType) => {
  return (
    <StyledComment>
      <Name>익명의 한 학생</Name>
      <Content>{content}</Content>
    </StyledComment>
  );
};

export default Comment;

const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-height: 80px;
  border-bottom: 1px solid ${color.gray300};
  padding: 16px;
`;

const Name = styled.span`
  ${font.caption}
  color: ${color.gray400};
`;

const Content = styled.p`
  ${font.caption}
`;
