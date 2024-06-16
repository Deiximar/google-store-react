import arrow from "../../../assets/icons/Arrow.svg";
import Description from "../Description.jsx";
import WatchVariants from "./WatchVariants.jsx";
import AddCart from "../AddCart.jsx";
import { useState } from "react";

const WatchProduct = ({ product }) => {
  const [variant, setVariant] = useState(product.variants[0]);

  const handleVariantOnClick = (id) => {
    setVariant(product.variants[id]);
  };

  return (
    <main>
      <div className="see-product-details">
        <img className="icon" alt="Back Icon" src={arrow} />
        <p>See product details</p>
      </div>
      <section className="productContainer">
        <section className="product">
          <div
            className="image-container"
            style={{ backgroundImage: `url(${variant.images[0]})` }}
          ></div>
        </section>
        <section>
          <Description
            title={product.name}
            category={product.category}
            price={product.price}
          />
          <WatchVariants
            variants={product.variants}
            onClick={handleVariantOnClick}
          />
          <AddCart price={product.price} />
        </section>
      </section>
    </main>
  );
};
export default WatchProduct;
