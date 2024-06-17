import deliveryLogo from "../../../assets/icons/Delivery.svg";

const ProductCart = ({ data, onClick }) => {
  return (
    <>
      <div className="product-cart-info">
        <div className="product-cart-image">
          <img className="image" src={data.image} alt={`${data.image} image`} />
        </div>
        <div className="product-cart-details">
          <span className="product-cart-name">{`${data.name} in ${data.variant}`}</span>
          <div className="product-cart-quantity">
            <span className="quantity-label">Cant:</span>
            <select
              name="quantity"
              id="quantity"
              value={data.quantity}
              readOnly
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <span className="details-price">
            {data.price.toFixed(2).replace(".", ",")}€
          </span>
          <div className="details-controls">
            <button className="remove" onClick={() => onClick(data.id)}>
              Remove
            </button>
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
    </>
  );
};

export default ProductCart;
