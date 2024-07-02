import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    font-size: 72px;
    width: 780px;
  }

  p {
    font-size: 2rem;
  }
`;

export const HeroImgStyled = styled.div`
  width: 60%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }
`;
export const HeroMarcaStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const HeroCardMarcaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 200px;

  img {
    width: 100%;
  }
`;
