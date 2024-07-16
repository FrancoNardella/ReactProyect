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
          <s.NavLinkStyled to="/">Home</s.NavLinkStyled>
          <s.NavLinkStyled to="/about">Nosotros</s.NavLinkStyled>
          <s.NavLinkStyled to="/products">Productos</s.NavLinkStyled>
          <s.NavLinkStyled to="/contactanos">Contactanos</s.NavLinkStyled>
        </s.NavbarItems>
      </s.NavbarContainer>
    </s.HeaderContainer>
  );
};

export default Navbar;
