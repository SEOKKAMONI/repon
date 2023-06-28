import font from "@/styles/font";
import styled from "styled-components";

interface PropsType {
  logoColor: "#FFFFFF" | "#000000";
}

const Logo = ({ logoColor }: PropsType) => {
  return <StyledLogo style={{ color: logoColor }}>레펀</StyledLogo>;
};

export default Logo;

const StyledLogo = styled.span`
  ${font.btn2}
  height: 100%;
  display: flex;
  align-items: center;
`;
