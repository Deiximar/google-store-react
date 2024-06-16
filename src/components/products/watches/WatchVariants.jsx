import ImageWatch from "./WatchImage.jsx";

const WatchesList = ({ variants }) => {
  const WatchItems = variants.map((watch) => (
    <li key={watch.id}>
      <ImageWatch
        alt={`Watch in ${watch.color} color`}
        source={watch.images[0]}
        color={watch.color}
      />
    </li>
  ));
  return <ul className="options">{WatchItems}</ul>;
};
export default WatchesList;
