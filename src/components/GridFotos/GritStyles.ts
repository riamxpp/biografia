import styled from "styled-components";
import colors from "../../colors";
import { InterfaceGridFoto } from "./InterfaceGrip";

const GridContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  background-color: ${colors.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContainerFotos = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem 0;
  justify-items: center;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
    width: 800px;
  }
  @media (max-width: 800px) {
    width: auto;
    grid-template-columns: 1fr;
  }
`;

const WrapperFoto = styled.div`
  width: 325px;
  height: 325px;
  overflow: hidden;
  border-radius: 50px;
  cursor: pointer;
`;

const Foto = styled.article<InterfaceGridFoto>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: 0 -80px;
  background-repeat: no-repeat;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const BotaoSaberMais = styled.button`
  text-transform: uppercase;
  border: 2px solid ${colors.titleColor};
  padding: 20px 63px 20px 61px;
  font-size: 1.25rem;
  background: transparent;
  color: ${colors.titleColor};
  margin: 1rem auto 0 auto;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 2px solid ${colors.textColor};
    background-color: ${colors.textColor};
    transition: 0.3s;
    color: ${colors.backgroundColor};
  }
`;

export { GridContainer, ContainerFotos, WrapperFoto, Foto, BotaoSaberMais };
