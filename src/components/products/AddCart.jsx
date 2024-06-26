import { useState } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage.js";
import productStyles from "./product.module.css";
import deliveryIcon from "../../assets/icons/Delivery.svg";

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
    <div className={productStyles.cartCard}>
      <p className={productStyles.priceCartCard}>{product.price}€</p>
      <hr />
      <div className={productStyles.cartButtons}>
        <label>
          <div className={productStyles.quantitySelect}>
            <select
              name="quantity"
              className={productStyles.quantityInput}
              onChange={handleSelectChange}
              value={quantity}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </label>
        <label>
          <button
            className={productStyles.addCartButton}
            onClick={handleAddCartOnClick}
          >
            Add to Cart
          </button>
        </label>
      </div>
      <div className={productStyles.deliveryInfo}>
        <img
          className={productStyles.icon}
          alt="Delivery Icon"
          src={deliveryIcon}
        />
        <p>
          Delivery 29 Apr to <span>08023</span>
        </p>
      </div>
    </div>
  );
};
export default AddCart;
