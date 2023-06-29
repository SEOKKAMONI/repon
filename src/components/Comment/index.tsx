import font from "@/styles/font";
import color from "@/styles/color";
import styled from "styled-components";

const Comment = () => {
  return (
    <StyledComment>
      <Name>익명의 한 학생</Name>
      <Content>안녕안녕</Content>
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
  border-bottom: 1px solid ${color.gray200};
  padding: 16px;
`;

const Name = styled.span`
  ${font.caption}
  color: ${color.gray400};
`;

const Content = styled.p`
  ${font.caption}
`;
