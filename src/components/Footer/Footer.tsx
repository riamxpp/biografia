import React from "react";
import { FooterComponente, FooterLink, FooterTexto } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterComponente>
      <FooterTexto>
        Made by{" "}
        <FooterLink href="https://github.com/riamxpp" target="_blank">
          Riam
        </FooterLink>
      </FooterTexto>
    </FooterComponente>
  );
};

export default Footer;
