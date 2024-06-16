import deliveryLogo from "../../../assets/icons/Delivery.svg";
const ProductCart = () => {
  return (
    <section className="products-container">
      <div className="info1">
        <div className="image1">
          <img
            className="buds"
            src="/images/earbuds/earbuds_bay_01.png"
            alt="buds"
          />
        </div>
        <div className="details-buds">
          <span className="details-name">Google Pixel Buds Pro light blue</span>
          <div className="details-quantity">
            <span className="quantity-label">Cant:</span>
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
      <div className="info2">
        <div className="image1">
          <img className="buds" src="/images/watches/smartwatch_black.png" alt="buds"/>
        </div>
        <div className="details-buds">
          <span className="details-name">Fitbits Inspire 3 in Midnight Zen</span>
          <div className="details-quantity">
            <span className="quantity-label">Cant:</span>
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <span className="details-price">99,95€</span>
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
    </section>
  );
};

export default ProductCart;
