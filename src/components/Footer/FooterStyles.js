import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100px;
  background-color: #f5e0b1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem;
  /* border: solid 2px red; */
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  /* border: solid 2px red; */
`;

export const FooterIconos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* margin-bottom: 10px; */

  img {
    width: 50px;
    height: 50px;
  }
`;
