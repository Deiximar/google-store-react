import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";
import WatchProduct from "../components/products/watches/WatchProduct.jsx";
import products from "../data.js";

function WatchesPage() {
  return (
    <>
      <NavBar />
      <WatchProduct product={products[1]} />
      <Footer />
    </>
  );
}

export default WatchesPage;
