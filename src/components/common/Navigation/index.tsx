import color from "@/styles/color";
import font from "@/styles/font";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationItem>
        <NavigationItemText>홈</NavigationItemText>
      </NavigationItem>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  width: 100%;
  padding: 0px 16px;
`;

const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const NavigationItemText = styled.span`
  ${font.p2}
  color: ${color.gray50};
`;
