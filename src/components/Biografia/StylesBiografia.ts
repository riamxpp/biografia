import styled from "styled-components";
import colors from "../../colors";
import { InterfaceBiografiaFoto } from "./InterfaceBiografia";

const BiografiaComponent = styled.section`
  background-color: ${colors.backgroundColor};
  height: auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h1`
  font-family: "Merriweather", serif;
  color: ${colors.titleColor};
  font-size: 4rem;
`;

const BiografiaSeguraFoto = styled.div`
  width: 25rem;
  height: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

const BiografiaFoto = styled.article<InterfaceBiografiaFoto>`
  width: 23rem;
  height: 23rem;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: 0 -100px;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

const BiografiaNome = styled.h5`
  color: ${colors.titleColor};
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2rem;
  margin: 0.5rem 0 1rem 0;
`;

const BiografiaParagrafo = styled.p`
  color: ${colors.textSecundaryColor};
  font-family: "Open Sans", sans-serif;
  line-height: 1.8;
  font-weight: 300;
  width: 739px;
  word-wrap: break-word;
  text-align: justify;
`;

const RedesSociais = styled.ul`
  width: 10rem;
  height: auto;
  margin: 1rem 0 0 0;
  list-style: none;
  display: flex;
`;

const ItemRedeSocial = styled.li`
  width: 33%;
  display: flex;
  justify-content: center;
`;

const LinkRedeSocial = styled.a`
  font-size: 100%;
  cursor: pointer;
`;

export {
  BiografiaComponent,
  Titulo,
  BiografiaSeguraFoto,
  BiografiaFoto,
  BiografiaNome,
  BiografiaParagrafo,
  RedesSociais,
  ItemRedeSocial,
  LinkRedeSocial,
};
