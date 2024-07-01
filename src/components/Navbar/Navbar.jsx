import * as s from "./NavbarStyles";

export const Navbar = () => {
  return (
    <s.HeaderContainer>
      <a href="#">
        <img src="./huella.png" alt="logo" />
      </a>
      <s.LinksContainer>
        <s.NavbarContainer>
          <a href="#">Nosotros</a>
          <a href="#">Productos</a>
        </s.NavbarContainer>

        {/* <s.UserNav>
          <s.UserContainer>
            <s.SpanStyled>Inicia sesion</s.SpanStyled>
          </s.UserContainer>
        </s.UserNav> */}
      </s.LinksContainer>
    </s.HeaderContainer>
  );
};
