import Description from "../Description.jsx";
import WatchVariants from "./WatchVariants.jsx";
import AddCart from "../AddCart.jsx";

const WatchInformation = ({ product }) => {
  return (
    <section>
      <Description
        title={product.name}
        category={product.category}
        price={product.price}
      />
      <WatchVariants variants={product.variants} />
      <AddCart price={product.price} />
    </section>
  );
};
export default WatchInformation;
