import productStyles from "../product.module.css";
import "../product.module.css";
const ColorOptions = ({ variants, onClick }) => {
  const colorList = variants.map((variant) => (
    <li key={variant.id}>
      <button
        className={productStyles.earbudColor}
        style={{ backgroundColor: variant.color }}
        onClick={() => onClick(variant.id)}
      ></button>
    </li>
  ));

  return (
    <div className={productStyles.earbudMenuOptions}>
      <p>Choose a color</p>
      <ul className={productStyles.earbudVariants}>{colorList}</ul>
    </div>
  );
};
export default ColorOptions;
