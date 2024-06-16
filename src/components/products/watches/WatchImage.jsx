const WatchImage = ({ alt, source, color }) => {
  return (
    <button className="watch">
      <img alt={alt} src={source} />
      <p> {color}</p>
    </button>
  );
};
export default WatchImage;
