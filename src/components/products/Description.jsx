const Description = ({ title, category, price }) => {
  return (
    <div className="product-description">
      <h1>{title}</h1>
      <p className="category">{category}</p>
      <p className="price">{price}€</p>
      <hr />
    </div>
  );
};
export default Description;
