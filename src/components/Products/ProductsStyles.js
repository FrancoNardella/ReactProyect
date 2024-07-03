import styled from "styled-components";

export const ProductsContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ProductCardContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
`;

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  /* border: 1px solid red; */
  max-width: 350px;

  img {
    width: 350px;
    height: 320px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
`;

export const ProductCardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #374654;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 350px;
  height: 170px;

  h3 {
    font-size: 15px;
    text-align: center;
  }
  p {
    margin-left: 25px;
    font-size: 20px;
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
`;
