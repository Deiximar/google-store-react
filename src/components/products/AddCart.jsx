const AddCart = ({ price, quantity }) => {
    return (
        <div className="cart">
            <p className="total">{price}€</p>
            <hr />
            <div className="cart-buttons">
                <button className="amount-input">
                    <p>{quantity}</p> <span>&#9662;</span>
                </button>
                <button className="add-cart-button">Add to Cart</button>
            </div>
            <div className="delivery-info">
                <img className="icon" alt="Icono Delivery" src="../../../src/assets/icons/Delivery.svg" />
                <p>Delivery 29 Apr to <span>08023</span></p>
            </div>
        </div>
    )
}
export default AddCart;
