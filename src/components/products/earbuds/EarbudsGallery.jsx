import { useState } from "react";

const EarbudsGallery = ({ variant }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleGalleryOnClick = (index) => {
    setSelectedIndex(index);
  };

  const imageList = variant.images.map((image, index) => (
    <div className="earbud-photo" onClick={() => handleGalleryOnClick(index)}>
      <img
        key={image.id}
        src={image}
        alt={`Earbuds in ${variant.color} color`}
      />
    </div>
  ));

  return (
    <>
      <div className="gallery">{imageList}</div>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${variant.images[selectedIndex]})` }}
      ></div>
    </>
  );
};
export default EarbudsGallery;
