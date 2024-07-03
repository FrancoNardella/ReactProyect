import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Products } from "./components/Products/Products.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
    </>
  );
}

export default App;
