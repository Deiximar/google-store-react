import WatchInformation from "./WatchInformation";
import arrow from "../../../assets/icons/Arrow.svg";

const WatchProduct = ({ product }) => {
  return (
    <main>
      <div className="see-product-details">
        <img className="icon" alt="Back Icon" src={arrow} />
        <p>See product details</p>
      </div>
      <section className="productContainer">
        <section className="product">
          <div className="image-container"></div>
        </section>
        <WatchInformation product={product} />
      </section>
    </main>
  );
};
export default WatchProduct;
