import { useState } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage.js";

const AddCart = ({ product, variant }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartProducts, setCartProducts] = useLocalStorage("cart", []);

  const handleSelectChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddCartOnClick = () => {
    const id = `${product.id}-${variant.name}-${variant.id}`;

    const existingProductIndex = cartProducts.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex >= 0) {
      const existingProduct = cartProducts[existingProductIndex];

      if (existingProduct.quantity + quantity > 2) {
        alert(
          "Unfortunately, we couldn't add that to your cart. There are limits on how many you can buy. If you just cancelled an order, you can retry again after the cancellation is complete."
        );

        return;
      }

      if (existingProductIndex >= 0) {
        cartProducts[existingProductIndex].quantity += quantity;

        setCartProducts([...cartProducts]);
        return;
      }
    }

    const myData = {
      id,
      name: product.name,
      variant: variant.name,
      image: variant.images[0],
      price: product.price,
      quantity: quantity,
    };

    setCartProducts([...cartProducts, myData]);
  };

  return (
    <div className="cart-card">
      <p className="price-cart-card">{product.price}€</p>
      <hr />
      <div className="cart-buttons">
        <label>
          <div className="quantity-select">
            <select
              name="quantity"
              className="quantity-input"
              onChange={handleSelectChange}
              value={quantity}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </label>
        <label>
          <button className="add-cart-button" onClick={handleAddCartOnClick}>
            Add to Cart
          </button>
        </label>
      </div>
      <div className="delivery-info">
        <img
          className="icon"
          alt="Icono Delivery"
          src="../../../src/assets/icons/Delivery.svg"
        />
        <p>
          Delivery 29 Apr to <span>08023</span>
        </p>
      </div>
    </div>
  );
};
export default AddCart;
