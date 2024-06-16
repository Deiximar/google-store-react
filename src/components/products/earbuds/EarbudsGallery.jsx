const EarbudsGallery = ({ variant }) => {
  const image = variant.images.map((image) => (
    <div className="earbud-photo">
      <img
        key={image.id}
        src={image}
        alt={`Earbuds in ${variant.color} color`}
      />
    </div>
  ));

  return <div className="gallery">{image}</div>;
};
export default EarbudsGallery;
