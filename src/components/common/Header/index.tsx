import styled from "styled-components";
import Logo from "../Logo";

const Header = () => {
  return (
    <StyledHeader>
      <Logo logoColor="#000000" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e2e2;
`;
