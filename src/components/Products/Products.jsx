import * as st from "./ProductsStyles.js";
import ProductCuerda from "/img/Cards/cuerda-starwars.jpg";
import ProductMordillo from "/img/Cards/mordillo-Hulk.jpg";
import ProductAlimento from "/img/Cards/alimento-dogchow.png";
import { Button } from "../UI/Button/Button.jsx";
export const Products = () => {
  return (
    <st.ProductsContainerStyled>
      <st.ProductCardContainerStyled>
        <st.ProductCardStyled>
          <img src={ProductCuerda} alt="" />
          <st.ProductCardInfoStyled>
            <h3>Cuerda Dental Circular Star Wars</h3>
            {/* <p>$13.884</p> */}
            <st.ButtonContainerStyled>
              <Button radius={10}>Ver más</Button>
            </st.ButtonContainerStyled>
          </st.ProductCardInfoStyled>
        </st.ProductCardStyled>

        <st.ProductCardStyled>
          <img src={ProductMordillo} alt="" />
          <st.ProductCardInfoStyled>
            <h3>Mordillo Avengers Hulk</h3>
            {/* <p>$7.504</p> */}
            <st.ButtonContainerStyled>
              <Button radius={10}>Ver más</Button>
            </st.ButtonContainerStyled>
          </st.ProductCardInfoStyled>
        </st.ProductCardStyled>

        <st.ProductCardStyled>
          <img src={ProductAlimento} alt="" />
          <st.ProductCardInfoStyled>
            <h3>Alimento Dog Chow Perro Adulto</h3>
            {/* <p>$6.103</p> */}
            <st.ButtonContainerStyled>
              <Button radius={10}>Ver más</Button>
            </st.ButtonContainerStyled>
          </st.ProductCardInfoStyled>
        </st.ProductCardStyled>
      </st.ProductCardContainerStyled>
    </st.ProductsContainerStyled>
  );
};
