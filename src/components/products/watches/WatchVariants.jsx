import WatchImage from "./WatchImage.jsx";

const WatchesList = ({ variants, onClick }) => {
  const WatchItems = variants.map((watch) => (
    <li key={watch.id} onClick={() => onClick(watch.id)}>
      <WatchImage
        alt={`Watch in ${watch.color} color`}
        source={watch.images[0]}
        color={watch.color}
      />
    </li>
  ));
  return <ul className="options">{WatchItems}</ul>;
};
export default WatchesList;
