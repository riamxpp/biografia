import React from "react";
import {
  BiografiaComponent,
  Titulo,
  BiografiaSeguraFoto,
  BiografiaFoto,
  BiografiaNome,
  BiografiaParagrafo,
  RedesSociais,
  ItemRedeSocial,
  LinkRedeSocial,
} from "./StylesBiografia";
import JemmaLerson from "../../assents/Jemma-Larson.jpeg";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Twitter from "./twitter";

const Biografia = () => {
  return (
    <>
      <BiografiaComponent>
        <Titulo>biografia</Titulo>
        <BiografiaSeguraFoto>
          <BiografiaFoto backgroundImg={JemmaLerson}></BiografiaFoto>
        </BiografiaSeguraFoto>
        <BiografiaNome>Jemma Larson</BiografiaNome>
        <BiografiaParagrafo>
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Quick can manor smart money hopes worth too. Comfort
          produce husband boy her had hearing. Sit amet massa vitae tortor
          condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum
          ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat
          lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus.
          Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum
          a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla
          facilisi. Tincidunt dui ut ornare lectus sit. Phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien nec. Eget gravida
          cum sociis natoque.{" "}
        </BiografiaParagrafo>
        <RedesSociais>
          <ItemRedeSocial>
            <LinkRedeSocial>
              <Facebook />
            </LinkRedeSocial>
          </ItemRedeSocial>
          <ItemRedeSocial>
            <LinkRedeSocial>
              <Twitter />
            </LinkRedeSocial>
          </ItemRedeSocial>
          <ItemRedeSocial>
            <LinkRedeSocial>
              <Instagram />
            </LinkRedeSocial>
          </ItemRedeSocial>
        </RedesSociais>
      </BiografiaComponent>
    </>
  );
};

export default Biografia;
// font-family: 'Ubuntu', sans-serif;
// font-family: 'Merriweather', serif;
