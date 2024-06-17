import productStyles from "./product.module.css";
const Description = ({ title, category, price }) => {
  return (
    <div className={productStyles.productDescription}>
      <h1>{title}</h1>
      <p className={productStyles.category}>{category}</p>
      <p className={productStyles.price}>{price}€</p>
      <hr />
    </div>
  );
};
export default Description;
