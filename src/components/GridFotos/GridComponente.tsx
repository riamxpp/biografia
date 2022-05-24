import React from "react";
import {
  Foto,
  ContainerFotos,
  GridContainer,
  WrapperFoto,
  BotaoSaberMais,
} from "./GritStyles";
import image1 from "../../assents/grid-1.jpeg";
import image2 from "../../assents/grid-2.jpeg";
import image3 from "../../assents/grid-3.jpeg";
import image4 from "../../assents/grid-4.jpeg";
import image5 from "../../assents/grid-5.jpeg";
import image6 from "../../assents/grid-6.jpeg";

const GridComponente = () => {
  return (
    <GridContainer>
      <ContainerFotos>
        <WrapperFoto>
          <Foto backgroundImg={image1} />
        </WrapperFoto>
        <WrapperFoto>
          <Foto backgroundImg={image2} />
        </WrapperFoto>
        <WrapperFoto>
          <Foto backgroundImg={image3} />
        </WrapperFoto>
        <WrapperFoto>
          <Foto backgroundImg={image4} />
        </WrapperFoto>
        <WrapperFoto>
          <Foto backgroundImg={image5} />
        </WrapperFoto>
        <WrapperFoto>
          <Foto backgroundImg={image6} />
        </WrapperFoto>
      </ContainerFotos>
      <BotaoSaberMais>Saber mais</BotaoSaberMais>
    </GridContainer>
  );
};

export default GridComponente;
