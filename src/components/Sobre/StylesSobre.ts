import styled from "styled-components";
import colors from "../../colors";

const SobreComponent = styled.section`
  width: 100%;
  height: auto;
  padding: 6rem 0;
  background: ${colors.backgroundColor};
`;

const SobreContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 2rem;
`;

const ColaboramosContainer = styled.article`
  width: 80%;
`;

const TituloColaboramos = styled.h2`
  color: ${colors.titleColor};
  font-family: "Merriweather", serif;
  font-size: 42px;
  margin-bottom: 1rem;
`;

const SampleHeadline = styled.h6`
  color: ${colors.textColor};
  text-transform: uppercase;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.2;
  font-weight: bold;
  letter-spacing: 3px;
`;

const NosMoramosContainer = styled.article`
  width: 80%;
`;

const TituloNosMoramos = styled.h6`
  color: ${colors.titleColor};
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
`;

const ParagrafoSobre = styled.p`
  color: ${colors.textColor};
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 2;
  margin-top: 15px;
`;

const ConverseAgora = styled.a`
  color: ${colors.textColor};
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export {
  SobreComponent,
  SobreContainer,
  ColaboramosContainer,
  TituloColaboramos,
  SampleHeadline,
  NosMoramosContainer,
  TituloNosMoramos,
  ParagrafoSobre,
  ConverseAgora,
};
