import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 20px;
  /* border: 1px solid crimson; */

  h2 {
    font-size: 20pt;
  }

  p {
    display: flex;
    text-align: center;
    font-size: 15pt;
    width: 50%;
    height: 70px;
  }
`;

export const AboutItems = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 70px;
  padding: 50px 5px;
  /* border: 1px solid crimson; */
`;

export const AboutItem = styled.div`
  display: flex;
  width: 75%;

  .img1 {
    margin-right: 70px;
    margin-left: 30px;
    /* border: 1px solid crimson; */
  }

  .img2 {
    margin-right: 30px;
    margin-left: 50px;
    /* border: 1px solid crimson; */
  }
  /* border: 1px solid crimson; */
`;

export const AboutImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  width: 40%;
  padding: 20px 20px;

  box-shadow: 0 0 10px #f5e0b1, 0 0 40px #f5e0b1;

  img {
    width: 200px;
    height: 350px;
  }
`;

export const AboutText = styled.div`
  padding: 5px 40px;
  width: 45%;
  /* border: 1px solid crimson; */

  p {
    display: flex;
    text-align: left;
    font-size: 14pt;
    width: 70%;
    height: 70px;
    /* border: 1px solid crimson; */
  }
`;
