import React from "react";
import ArrowDown from "./ArrowDown";
import {
  Componente1,
  NumeroUm,
  NumeroUmTitulo,
  NumeroUmContainerSeta,
  TituloVerPotifolio,
} from "./StylesUm";

const Um = () => {
  return (
    <Componente1>
      <NumeroUm>1</NumeroUm>
      <NumeroUmTitulo>
        Nós projetamos experiências inspiradas em pessoas que criam mudanças
        positivas na vida das pessoas.
      </NumeroUmTitulo>
      <NumeroUmContainerSeta>
        <ArrowDown></ArrowDown>
      </NumeroUmContainerSeta>
      <TituloVerPotifolio>ver portifólio</TituloVerPotifolio>
    </Componente1>
  );
};

export default Um;
