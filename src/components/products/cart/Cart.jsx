import ProductCart from "./ProductCart.jsx";
import Summary from "./Summary.jsx";
import { useLocalStorage } from "../../../utils/useLocalStorage.js";
import EmptyCart from "./EmptyCart.jsx";

const Cart = () => {
  const [cartProducts, setCartProducts] = useLocalStorage("cart", []);

  if (cartProducts.length === 0) {
    return <EmptyCart />;
  }

  const totalQuantity = cartProducts.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  const handleRemoveProductOnClick = (id) => {
    const myData = cartProducts.filter((product) => product.id !== id);

    setCartProducts(myData);
  };

  return (
    <main>
      <h1 className="cart-title">CART</h1>
      <h3 className="cart-items">({totalQuantity} items)</h3>
      <section className="cart-container">
        <section className="products-container">
          {cartProducts.map((data) => (
            <ProductCart
              key={data.id}
              data={data}
              onClick={handleRemoveProductOnClick}
            />
          ))}
        </section>
        <Summary data={cartProducts} />
      </section>
    </main>
  );
};

export default Cart;
