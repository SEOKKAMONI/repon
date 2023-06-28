import color from "@/styles/color";
import font from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Logo from "../Logo";

const Header = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <Logo logoColor="#000000" />
      <ShareButton onClick={() => router.push("/create")}>공유하기</ShareButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 36px;
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid ${color.gray100};
`;

const ShareButton = styled.button`
  ${font.btn2}
  color: ${color.maruDefault};
  &:hover {
    color: ${color.maruHoverd};
  }
`;
