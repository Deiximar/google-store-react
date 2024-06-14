import ImageWatch from "./ImageWatch";
import blackSmartwatch from "../../../assets/images/smartwatch_black.png";
import pinkSmartwatch from "../../../assets/images/smartwatch_pink.png";
import yellowSmartwatch from "../../../assets/images/smartwatch_yellow.png";

const WatchesList = [
  {
    id: 0,
    describe: "Midnight Zen Smartwatch Photo",
    imagePath: blackSmartwatch,
    productColor: "Midnight Zen",
  },
  {
    id: 1,
    describe: "Lilac Bliss Smartwatch Photo",
    imagePath: pinkSmartwatch,
    productColor: "Lilac Bliss",
  },
  {
    id: 2,
    describe: "Morning Glow Smartwatch Photo",
    imagePath: yellowSmartwatch,
    productColor: "Morning Glow",
  },
];

const Watches = () => {
  const WatchItems = WatchesList.map((watch) => (
    <li key={watch.id} className="watch">
      <ImageWatch
        describe={watch.describe}
        imagePath={watch.imagePath}
        productColor={watch.productColor}
      />
    </li>
  ));
  return <ul className="options">{WatchItems}</ul>;
};
export default Watches;
