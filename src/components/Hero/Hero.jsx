import {
  HeroCardMarcaStyled,
  HeroContainerStyled,
  HeroImgStyled,
  HeroMarcaStyled,
} from "./HeroStyles";
import HeroImg from "/img/imagen-hero.jpg";
import HeroDogChow from "/img/DogChow.png";
import HeroEukanauba from "/img/eukanuba.png";
import HeroPedigree from "/img/Pedigree.png";
import HeroVital from "/img/Vital.jpg";
export const Hero = () => {
  return (
    <HeroContainerStyled>
      <h1>Bienvenidos a PawPlace</h1>
      <HeroImgStyled>
        <img src={HeroImg} alt="Imagen de mascotas" />
      </HeroImgStyled>

      <p>Creando momentos felices para tus mascotas</p>
      <HeroMarcaStyled>
        <HeroCardMarcaStyled>
          <img src={HeroDogChow} alt="Marca DogChow" />
        </HeroCardMarcaStyled>

        <HeroCardMarcaStyled>
          <img src={HeroEukanauba} alt="" />
        </HeroCardMarcaStyled>

        <HeroCardMarcaStyled>
          <img src={HeroPedigree} alt="" />
        </HeroCardMarcaStyled>

        <HeroCardMarcaStyled>
          <img src={HeroVital} alt="" />
        </HeroCardMarcaStyled>
      </HeroMarcaStyled>
    </HeroContainerStyled>
  );
};
