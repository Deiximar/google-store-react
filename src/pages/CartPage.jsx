import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";
import ProductCart from "../components/products/cart/ProductCart.jsx";
import Summary from "../components/products/cart/Summary.jsx";
function CartPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>CART</h1>
        <h3>(3 items)</h3>
        <section className="cart-container">
          <ProductCart />
          <Summary />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default CartPage;
