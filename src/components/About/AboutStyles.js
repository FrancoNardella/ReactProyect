import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #0b4a89;
    font-size: 40pt;

    @media (max-width: 768px) {
      font-size: 30pt;
    }

    @media (max-width: 480px) {
      font-size: 20pt;
    }
  }

  p {
    display: flex;
    text-align: center;
    font-size: 20pt;
    width: 50%;
    height: 70px;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 15pt;
      width: 75%;
    }

    @media (max-width: 480px) {
      font-size: 10pt;
      width: 90%;
    }
  }
`;

export const AboutItems = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

export const AboutItem = styled.div`
  display: flex;
  width: 100%;

  .textAbout1 {
    margin: 70px 0 0 700px;
    width: 55%;
    line-height: 1.5;

    @media (max-width: 768px) {
      margin: 35px 0 0 350px;
      width: 70%;
    }

    @media (max-width: 480px) {
      margin: 20px 0 0 20px;
      width: 90%;
    }
  }

  .textAbout2 {
    width: 55%;
    margin: 70px 0 0 200px;
    line-height: 1.5;

    @media (max-width: 768px) {
      margin: 35px 0 0 100px;
      width: 70%;
    }

    @media (max-width: 480px) {
      margin: 20px 0 0 10px;
      width: 90%;
    }
  }
`;

export const AboutImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    height: 700px;

    @media (max-width: 768px) {
      height: 500px;
    }

    @media (max-width: 480px) {
      height: 300px;
    }
  }
`;

export const AboutText = styled.div`
  position: absolute;
  padding: 10px 40px;
  height: 600px;

  h2 {
    font-size: 35pt;
    height: 60px;
  }

  p {
    display: flex;
    text-align: left;
    font-size: 25pt;
    width: 100%;
    height: 100px;
  }
`;
