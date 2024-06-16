const Summary = () => {
  return (
    <div className="summary-container">
      <h2>Order Summary</h2>
      <div className="order-summary">
        <div className="order-subtotal">
          <span className="subtotal-title">Subtotal</span>
          <span className="subtotal-amount">€ 428,90</span>
        </div>
        <div className="order-shipping">
          <span className="shipping-title">Shipping costs</span>
          <span className="shipping-amount">€ 4,90</span>
        </div>
        <div className="order-vat">
          <span className="vat-title">Estimated VAT</span>
          <span className="vat-amount">Including</span>
        </div>
      </div>
      <hr />
      <div className="order-estimated">
        <span className="estimated-title">Total estimated:</span>
        <div className="estimated-details">
          <span className="estimated-total">€ 433,80</span>
          <span className="estimated-monthly">or €144,60/month</span>
          <span className="estimated-instalments">
            with 3 monthly instalments *
          </span>
        </div>
      </div>
      <div className="complete-purchase-button">
        <button className="complete-button">Complete the purchase</button>
      </div>
    </div>
  );
};

export default Summary;
