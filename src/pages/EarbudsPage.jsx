import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";
import EarbudsProduct from "../components/products/earbuds/EarbudsProduct.jsx"
import products from "../data.js";

const EarbudsPage = () => {
  return (
    <>
      <NavBar />
      <EarbudsProduct product={products[0]} />
      <Footer />
    </>
  );
};

export default EarbudsPage;
