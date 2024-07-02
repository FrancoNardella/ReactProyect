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
    font-size: 72px;
    width: 780px;
  }
`;

export const HeroImgStyled = styled.div`
  width: 70%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }
`;
