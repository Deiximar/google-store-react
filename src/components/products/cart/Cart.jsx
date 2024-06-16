import ProductCart from "./ProductCart.jsx";
import Summary from "./Summary.jsx";
import { useLocalStorage } from "../../../utils/useLocalStorage.js";
import EmptyCart from "./EmptyCart.jsx";

const cartData = [
  {
    name: "Google Pixel Buds Pro",
    color: "Light Blue",
    image: "./images/earbuds/earbuds_bay_01.png",
    price: 229,
    quantity: 2,
  },
  {
    name: "Fitbit Inspire 3",
    color: "Midnight Zen",
    image: "/images/watches/smartwatch_black.png",
    price: 99.5,
    quantity: 1,
  },
];
const Cart = () => {
  const [cartProducts] = useLocalStorage("cart", []);

  if (cartProducts.length === 0) {
    return <EmptyCart />;
  }

  const totalQuantity = cartProducts.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return (
    <main>
      <h1 className="cart-title">CART</h1>
      <h3 className="cart-items">({totalQuantity} items)</h3>
      <section className="cart-container">
        <section className="products-container">
          {cartProducts.map((data) => (
            <ProductCart data={data} />
          ))}
        </section>
        <Summary data={cartProducts} />
      </section>
    </main>
  );
};

export default Cart;
