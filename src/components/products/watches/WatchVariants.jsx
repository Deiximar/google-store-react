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
  return (
    <div className="watch-menu-options">
      <p>Choose a color</p>
      <ul className="watch-variants">{WatchItems}</ul>
    </div>
  );
};
export default WatchesList;
