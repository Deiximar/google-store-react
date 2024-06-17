import WatchImage from "./WatchImage.jsx";
import productStyles from "../product.module.css";

const WatchesList = ({ variants, onClick }) => {
  const WatchItems = variants.map((watch) => (
    <li key={watch.id} onClick={() => onClick(watch.id)}>
      <WatchImage
        alt={`Watch in ${watch.color} color`}
        source={watch.images[0]}
        color={watch.name}
      />
    </li>
  ));
  return (
    <div className={productStyles.watchMenuOptions}>
      <p>Choose a color</p>
      <ul className={productStyles.watchVariants}>{WatchItems}</ul>
    </div>
  );
};
export default WatchesList;
