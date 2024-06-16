import NavBar from "./components/nav/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Product from "./components/products/Product.jsx";
import GalleryEarbuds from "./components/products/earbuds/GalleryEarbuds.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Product />
      <GalleryEarbuds/>
      <Footer />
    </div>
  );
}

export default App;
