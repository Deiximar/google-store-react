import productStyles from "../product.module.css";
const WatchImage = ({ alt, source, color }) => {
  return (
    <button className={productStyles.watch}>
      <img alt={alt} src={source} />
      <p> {color}</p>
    </button>
  );
};
export default WatchImage;
