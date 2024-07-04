import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Products } from "./components/Products/Products.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Marcas } from "./components/Marcas/Marcas.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Marcas />
      <About />
      <Footer />
    </>
  );
}

export default App;
