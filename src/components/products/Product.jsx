import ProductInformation from "./ProductInformation";
import arrow from "../../assets/icons/Arrow.svg";

const Product = () => {
  return (
    <main>
      <div class="see-product-details">
        <img class="icon" alt="Back Icon" src={arrow} />
        <p>See product details</p>
      </div>
      <section class="productContainer">
        <section className="product">
          <div className="image-container"></div>
        </section>
        <ProductInformation />
      </section>
    </main>
  );
};
export default Product;
