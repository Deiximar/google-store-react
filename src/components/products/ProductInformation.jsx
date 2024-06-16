import Description from "./Description.jsx";
import Watches from "./watches/Watches.jsx";
import AddCart from "./AddCart.jsx";

const products = [
  
  {
    title: "Fitbit Inspire 3",
    category: "Health & Fitness Tracker",
    price: 99.95,
  },
  {
    title: "Google Pixel Buds Pro",
    category: "Music & Sound",
    price: 229,
  },
];
const ProductInformation = () => {
  const product = products[0];
  return (
    <section>
      <Description
        title={product.title}
        category={product.category}
        price={product.price}
      />
      <Watches />
      <AddCart price={product.price} />
    </section>
  );
};
export default ProductInformation;
