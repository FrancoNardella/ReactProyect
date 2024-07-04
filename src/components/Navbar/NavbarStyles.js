import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100px;
  background-color: #f58726;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  img {
    width: 800px;
    height: 200px;
  }
`;

export const NavbarContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  /* border: solid 2px red; */
  a {
    padding: 1rem 1.5rem;
  }
`;

export const NavbarItems = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  /* border: solid 2px red; */

  @media (max-width: 768px) {
    display: none;
  }

  a {
    color: white;
    font-size: 25px;
  }
`;
