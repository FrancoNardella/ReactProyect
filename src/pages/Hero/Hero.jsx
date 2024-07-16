import { HeroContainerStyled, HeroImgStyled } from "./HeroStyles";
import HeroImg from "/img/Fondo perro gatito.png";

function Hero() {
  return (
    <>
      <HeroContainerStyled>
        {/* <h1>Creando momentos felices para tus mascotas</h1> */}
        <HeroImgStyled>
          <h1>Creando momentos felices para tus mascotas</h1>
          <img src={HeroImg} alt="Imagen de mascotas" />
        </HeroImgStyled>
      </HeroContainerStyled>
    </>
  );
}

export default Hero;
