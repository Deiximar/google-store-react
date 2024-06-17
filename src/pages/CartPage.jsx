import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";
import Cart from "../components/products/cart/Cart.jsx";
//import EmptyCart from "../components/products/cart/EmptyCart.jsx";
function CartPage() {
  return (
    <>
      <NavBar />
      <Cart />
      <Footer />
    </>
  );
}
export default CartPage;
