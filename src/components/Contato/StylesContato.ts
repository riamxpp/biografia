import styled from "styled-components";
import colors from "../../colors";
import { InterfaceContatoFoto } from "./InterfaceContato";

const ContatoComponente = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.backgroundColor};
`;

const ContatoTitulo = styled.h2`
  font-family: "Merriweather", serif;
  font-size: 48px;
  color: ${colors.titleColor};
`;

const ContatoTelefone = styled.span`
  color: ${colors.textColor};
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 30px;
  letter-spacing: 1px;
  font-family: "Ubuntu", sans-serif;
`;

const ContatoFoto = styled.div<InterfaceContatoFoto>`
  width: 13rem;
  height: 13rem;
  background-color: white;
  margin-top: 2rem;
  border-radius: 50%;
  background-image: url(${(props) => props.backgroundContato});
  background-size: cover;
  background-position: 0 -50px;
  background-repeat: no-repeat;
`;

const ContatoLocalizacao = styled.h6`
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  color: ${colors.titleColor};
`;

const ContatoEndereco = styled.span`
  color: ${colors.textColor};
  font-family: "Open Sans", sans-serif;
  letter-spacing: 1px;
  line-height: 1.2;
`;

const ContatoSeparador = styled.div`
  width: 13rem;
  height: 0.7rem;
  margin-top: 25px;
  background: ${colors.titleColor};
`;

const ContatoTexto = styled.p`
  width: 16rem;
  color: ${colors.textColor};
  text-align: center;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  margin-top: 20px;
  line-height: 1.2;
`;

export {
  ContatoComponente,
  ContatoTitulo,
  ContatoTelefone,
  ContatoFoto,
  ContatoLocalizacao,
  ContatoEndereco,
  ContatoSeparador,
  ContatoTexto,
};
