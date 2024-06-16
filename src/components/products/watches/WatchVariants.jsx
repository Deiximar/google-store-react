import WatchImage from "./WatchImage.jsx";

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
  return <ul className="watch-variants">{WatchItems}</ul>;
};
export default WatchesList;
