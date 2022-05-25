import React from "react";
import {
  ContatoComponente,
  ContatoEndereco,
  ContatoFoto,
  ContatoLocalizacao,
  ContatoSeparador,
  ContatoTelefone,
  ContatoTexto,
  ContatoTitulo,
} from "./StylesContato";
import Telefone from "./Telefone";
import Mulher from "../../assents/Mulher-Informacoes.jpeg";

const Contato = () => {
  return (
    <ContatoComponente>
      <ContatoTitulo>Somos segurança da informação.</ContatoTitulo>
      <ContatoTelefone>
        <Telefone />
        +1 (234) 567-8910
      </ContatoTelefone>
      <ContatoFoto backgroundContato={Mulher}></ContatoFoto>
      <ContatoLocalizacao>Localização</ContatoLocalizacao>
      <ContatoEndereco>121 Rock Sreet, 21 Avenue,</ContatoEndereco>
      <ContatoEndereco>New York, NY 92103-9000</ContatoEndereco>
      <ContatoSeparador></ContatoSeparador>
      <ContatoTexto>
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </ContatoTexto>
    </ContatoComponente>
  );
};

export default Contato;
