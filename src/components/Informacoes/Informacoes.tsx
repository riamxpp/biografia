import React from "react";
import {
  InformacoesCaixaDireita,
  InformacoesCaixaEsquerda,
  InformacoesComponent,
  InformacoesContainer,
  InformacoesParagrafo,
  InformacoesTitulo,
  InformacoesContainerAssinatura,
  InformacoesAssinatura,
} from "./InformacoesStyles";
import assinatura from "../../assents/Assinatura.png";

const Informacoes = () => {
  return (
    <InformacoesComponent>
      <InformacoesContainer>
        <InformacoesCaixaEsquerda>
          <InformacoesTitulo>
            Traga para a mesa estratégias de sobrevivência em que todos ganham
            para garantir a dominação proativa. No final do dia, no futuro, um
            novo normal que evoluiu da geração X está na pista rumo a uma
            solução de nuvem simplificada.
          </InformacoesTitulo>
          <InformacoesParagrafo>
            Viver a vida O destino de amanhã, embora sejas sábio, não podes
            dizer nem supor; Passe, portanto, não hoje em vão, Pois isso nunca
            vai voltar. Vocês sabem, meus amigos, com que farra valente fiz um
            segundo casamento em minha casa; tirou da minha cama a velha razão
            estéril e tomou por esposa a filha da videira. Os homens da
            Esperança Mundial colocam seus corações nas cinzas - ou prospera; e
            logo, como a neve na face poeirenta do deserto, iluminando-se por
            uma ou duas horas - se foi.
          </InformacoesParagrafo>
        </InformacoesCaixaEsquerda>
        <InformacoesCaixaDireita>
          <InformacoesParagrafo>
            Viver a vida O destino de amanhã, embora sejas sábio, não podes
            dizer nem supor; Passe, portanto, não hoje em vão, Pois isso nunca
            vai voltar. Vocês sabem, meus amigos, com que farra valente fiz um
            segundo casamento em minha casa; tirou da minha cama a velha razão
            estéril e tomou por esposa a filha da videira. Os homens da
            Esperança Mundial colocam seus corações nas cinzas - ou prospera; e
            logo, como a neve na face poeirenta do deserto, iluminando-se por
            uma ou duas horas - se foi.
          </InformacoesParagrafo>
          <InformacoesContainerAssinatura>
            <InformacoesAssinatura src={assinatura} />
          </InformacoesContainerAssinatura>
        </InformacoesCaixaDireita>
      </InformacoesContainer>
    </InformacoesComponent>
  );
};

export default Informacoes;
