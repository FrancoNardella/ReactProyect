import { HeroContainerStyled, HeroImgStyled } from "./HeroStyles";
import HeroImg from "/public/img/imagen-hero.jpg";
export const Hero = () => {
  return (
    <HeroContainerStyled>
      <h1>Bienvenidos a PawPlace</h1>
      <HeroImgStyled>
        <img src={HeroImg} alt="Imagen de mascotas" />
      </HeroImgStyled>
      <div>
        <p>Texto de la landing</p>
      </div>
    </HeroContainerStyled>
  );
};
