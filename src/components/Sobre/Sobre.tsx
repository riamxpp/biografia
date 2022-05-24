import React from "react";
import {
  ColaboramosContainer,
  SobreContainer,
  ConverseAgora,
  NosMoramosContainer,
  ParagrafoSobre,
  SampleHeadline,
  SobreComponent,
  TituloColaboramos,
  TituloNosMoramos,
} from "./StylesSobre";
import Whatsapp from "./Whatsapp";

const Sobre = () => {
  return (
    <SobreComponent>
      <SobreContainer>
        <ColaboramosContainer>
          <TituloColaboramos>
            Colaboramos com marcas e agências para criar experiências
            memoráveis.
          </TituloColaboramos>
          <SampleHeadline>sampple</SampleHeadline>
          <SampleHeadline>headline</SampleHeadline>
        </ColaboramosContainer>
        <NosMoramosContainer>
          <TituloNosMoramos>
            Nós moramos com elegância para que o apetite das venezianas seja
            desviado.
          </TituloNosMoramos>
          <ParagrafoSobre>
            A principal razão pela qual continuamos a adaptar e evoluir nosso
            modelo de negócios é garantir que estamos atendendo às expectativas
            de nossos clientes. Um exemplo disso foi a utilização de tecnologia
            moderna e a introdução do rastreamento em tempo real de nossas
            equipes por GPS. Isso garante que nossos clientes recebam o tempo
            que pagaram em suas casas, uma vez que este é o problema mais comum
            em nosso setor.
          </ParagrafoSobre>

          <ConverseAgora>
            <Whatsapp />
            Converse Agora
          </ConverseAgora>
        </NosMoramosContainer>
      </SobreContainer>
    </SobreComponent>
  );
};

export default Sobre;
