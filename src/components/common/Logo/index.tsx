import font from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface PropsType {
  logoColor: "#FFFFFF" | "#000000";
}

const Logo = ({ logoColor }: PropsType) => {
  const router = useRouter();
  return (
    <StyledLogo onClick={() => router.push("/")} style={{ color: logoColor }}>
      레펀
    </StyledLogo>
  );
};

export default Logo;

const StyledLogo = styled.span`
  ${font.btn2}
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
