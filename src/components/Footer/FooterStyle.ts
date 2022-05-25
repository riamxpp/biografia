import styled from "styled-components";
import colors from "../../colors";

const FooterComponente = styled.footer`
  background-color: ${colors.footerColor};
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterTexto = styled.p`
  color: ${colors.textColor};
  font-family: "Ubuntu", sans-serif;
`;

const FooterLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textColor};
  &:hover {
    color: ${colors.titleColor};
  }
`;

export { FooterComponente, FooterTexto, FooterLink };
