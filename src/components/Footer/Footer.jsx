import * as s from "./FooterStyles";
import logoFace from "/img/facebook.png";
import logoTw from "/img/gorjeo.png";
import logoIg from "/img/instagram.png";

export const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterText>
        <h3>Hecho con 🧡 por Franco</h3>
      </s.FooterText>
      <s.FooterIconos>
        <img src={logoFace} alt="logoFace" />
        <img src={logoTw} alt="logoTw" />
        <img src={logoIg} alt="logoIg" />
      </s.FooterIconos>
    </s.FooterContainer>
  );
};
