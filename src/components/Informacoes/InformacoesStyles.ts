import styled from "styled-components";
import colors from "../../colors";

const InformacoesComponent = styled.section`
  background: ${colors.backgroundColor};
  width: 100%;
  height: auto;
  padding: 2rem 0;
`;

const InformacoesContainer = styled.div`
  width: 1050px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  @media (max-width: 1100px) {
    width: auto;
    flex-direction: column;
    align-items: center;
  }
`;

const InformacoesCaixaEsquerda = styled.article`
  width: 500px;
  @media (max-width: 600px) {
    width: 350px;
  }
`;

const InformacoesTitulo = styled.h5`
  color: ${colors.titleColor};
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Ubuntu", sans-serif;
`;

const InformacoesParagrafo = styled.p`
  color: ${colors.textColor};
  font-size: 16px;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
`;

const InformacoesCaixaDireita = styled.article`
  width: 500px;
  @media (max-width: 600px) {
    width: 350px;
  }
`;

const InformacoesContainerAssinatura = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 2rem;
`;

const InformacoesAssinatura = styled.img`
  width: 100%;
`;

export {
  InformacoesComponent,
  InformacoesContainer,
  InformacoesCaixaEsquerda,
  InformacoesTitulo,
  InformacoesParagrafo,
  InformacoesCaixaDireita,
  InformacoesContainerAssinatura,
  InformacoesAssinatura,
};
