import arrow from "../../../assets/icons/Arrow.svg";
import EarbudsGallery from "./EarbudsGallery";
import Description from "../Description.jsx";
import ColorOptions from "./ColorOptions.jsx";
import AddCart from "../AddCart.jsx";
import { useState } from "react";
import productStyles from "../product.module.css";

const EarbudsProduct = ({ product }) => {
  const [variant, setVariant] = useState(product.variants[0]);

  const handleVariantOnClick = (id) => {
    setVariant(product.variants[id]);
  };

  return (
    <main>
      <div className={productStyles.seeProductDetails}>
        <img className={productStyles.icon} alt="Back Icon" src={arrow} />
        <p>See product details</p>
      </div>
      <section className={productStyles.productContainer}>
        <section className={productStyles.productEarbuds}>
          <EarbudsGallery variant={variant} />
        </section>
        <section>
          <Description
            title={product.name}
            category={product.category}
            price={product.price}
          />
          <ColorOptions
            variants={product.variants}
            onClick={handleVariantOnClick}
          />
          <AddCart product={product} variant={variant} />
        </section>
      </section>
    </main>
  );
};
export default EarbudsProduct;
