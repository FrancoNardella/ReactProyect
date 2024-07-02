import * as s from "./NavbarStyles";
import imgLogo from "/public/img/huella.png";

export const Navbar = () => {
  return (
    <s.HeaderContainer>
      <a href="#">
        <img src={imgLogo} alt="logo" />
      </a>
      <s.NavbarContainer>
        <s.NavbarItems>
          <a href="#">Nosotros</a>
          <a href="#">Productos</a>
        </s.NavbarItems>
      </s.NavbarContainer>
    </s.HeaderContainer>
  );
};
