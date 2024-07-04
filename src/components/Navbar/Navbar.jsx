import * as s from "./NavbarStyles";
import imgLogo from "/img/Marca.png";

export const Navbar = () => {
  return (
    <s.HeaderContainer>
      <a href="#">
        <img src={imgLogo} alt="logo" />
      </a>
      <s.NavbarContainer>
        <s.NavbarItems>
          <a href="#About">Nosotros</a>
          <a href="#Products">Productos</a>
        </s.NavbarItems>
      </s.NavbarContainer>
    </s.HeaderContainer>
  );
};
