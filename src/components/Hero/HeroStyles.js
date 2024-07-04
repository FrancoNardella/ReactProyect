import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* gap: 30px; */

  p {
    font-size: 2rem;
  }
`;

export const HeroImgStyled = styled.div`
  /* width: 60%; */

  img {
    width: 100%;
    /* padding-bottom: 75px; */
  }

  h1 {
    position: absolute;
    justify-content: center;
    text-align: left;
    font-size: 72px;
    width: 900px;
    margin-top: 230px;
    margin-left: 700px;
    color: #0b4a89;
    /* border: 1px solid red; */
  }
`;
