import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Hero from "../pages/Hero/Hero";
import { Layout } from "../components/Layout/Layout";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
// import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
// import User from "../pages/User/User";

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Hero />} />

          {/* Products */}
          {/* <Route path="products" element={<Products />} /> */}

          {/* Rutas anidadas */}
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productName" element={<Product />} />
          </Route>

          {/* Login */}
          {/* <Route path="login" element={<Login />} /> */}

          {/* Ruta dinamica */}
          <Route path="about" element={<About />} />

          {/* 404 */}
          <Route path="*" element={<h2>Error 404</h2>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
