import arrow from "../../../assets/icons/Arrow.svg";
import EarbudsGallery from "./EarbudsGallery";
import Description from "../Description.jsx";
import ColorOptions from "./ColorOptions.jsx";
import AddCart from "../AddCart.jsx";
import { useState } from "react";

const EarbudsProduct = ({ product }) => {
  const [variant, setVariant] = useState(product.variants[0]);

  const handleVariantOnClick = (id) => {
    setVariant(product.variants[id]);
  };
  console.log(variant);

  return (
    <main>
      <div className="see-product-details">
        <img className="icon" alt="Back Icon" src={arrow} />
        <p>See product details</p>
      </div>
      <section className="productContainer">
        <section className="product">
          <EarbudsGallery variant={variant} />
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
          <ColorOptions />
          <AddCart price={product.price} />
        </section>
      </section>
    </main>
  );
};
export default EarbudsProduct;
