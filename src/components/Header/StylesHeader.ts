import styled from "styled-components";
import colors from "../../colors";

const HeaderComponent = styled.header`
  background-color: ${colors.backgroundColor};
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
`;

const ButtonHeader = styled.button`
  height: 2rem;
  width: 2rem;
  background: ${colors.backgroundColor};
  &:after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 1.5rem;
    background: #fff;
    box-shadow: 0 8px #fff, 0 -8px #fff;
  }
`;

export { HeaderComponent, ButtonHeader };
