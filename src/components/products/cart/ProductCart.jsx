import deliveryLogo from "../../../assets/icons/Delivery.svg";
const ProductCart = () => {
  return (
    <section className="products-container">
      <div className="product-cart-info">
        <div className="product-cart-image">
          <img
            className="image"
            src="/images/earbuds/earbuds_bay_01.png"
            alt="buds"
          />
        </div>
        <div className="product-cart-details">
          <span className="product-cart-name">
            Google Pixel Buds Pro light blue
          </span>
          <div className="product-cart-quantity">
            <span className="quantity-label">Cant:</span>
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <span className="details-price">229,00€</span>
          <div className="details-controls">
            <button className="remove">Remove</button>
          </div>
          <div className="details-delivery">
            <img src={deliveryLogo} className="delivery-logo" />
            <strong>
              <span>Delivery 29 Apr to 08023</span>
            </strong>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ProductCart;
