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

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  max-width: 320px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.3);

  img {
    width: 320px;
    height: 250px;
  }

  @media (max-width: 768px) {
    max-width: 250px;

    img {
      width: 250px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    max-width: 200px;

    img {
      width: 200px;
      height: 150px;
    }
  }
`;

export const ProductCardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f58726;
  width: 320px;
  height: 170px;

  h3 {
    font-size: 20px;
    text-align: center;
  }

  p {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 140px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 110px;

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
