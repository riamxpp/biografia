import styled from "styled-components";
import colors from "../../colors";

const Componente1 = styled.section`
  padding: 2rem 0;
  width: 100%;
  background-color: ${colors.backgroundColor};
`;

const NumeroUm = styled.div`
  background-color: transparent;
  color: ${colors.textColor};
  width: 759px;
  margin: 0 auto;
  font-size: 59px;
  font-family: "Merriweather", serif;
  text-align: center;
  padding-bottom: 3rem;
  border-bottom: 1px solid #fff;
`;

const NumeroUmTitulo = styled.h2`
  font-size: 48px;
  font-family: "Merriweather", serif;
  color: ${colors.titleColor};
  width: 750px;
  margin: 0 auto;
  text-align: center;
  margin-top: 51px;
`;

const NumeroUmContainerSeta = styled.div`
  width: 5rem;
  height: auto;
  margin: 3rem auto 1rem auto;
  display: flex;
  justify-content: center;
`;

const TituloVerPotifolio = styled.h5`
  text-transform: uppercase;
  font-family: "Merriweather", serif;
  color: ${colors.titleColor};
  text-align: center;
  font-size: 20px;
  line-height: 1.2;
`;

export {
  Componente1,
  NumeroUm,
  NumeroUmTitulo,
  NumeroUmContainerSeta,
  TituloVerPotifolio,
};
