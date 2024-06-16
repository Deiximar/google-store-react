const AddCart = ({ price }) => {
  return (
    <div className="cart-card">
      <p className="price-cart-card">{price}€</p>
      <hr />
      <div className="cart-buttons">
        <form action="">
          <label>
            <div className="quantity-select">
              <select
                name="quantity"
                id="quantity-product"
                className="quantity-input"
              >
                <option value="1" defaultValue>
                  1
                </option>
                <option value="2">2</option>
              </select>
            </div>
          </label>
          <label>
            <input
              type="submit"
              value="Add to Cart"
              className="add-cart-button"
            />
          </label>
        </form>
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
