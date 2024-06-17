import productStyles from "../product.module.css";
import { useState } from "react";

const EarbudsGallery = ({ variant }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleGalleryOnClick = (index) => {
    setSelectedIndex(index);
  };

  const imageList = variant.images.map((image, index) => (
    <div
      key={index}
      className={productStyles.earbudPhoto}
      onClick={() => handleGalleryOnClick(index)}
    >
      <img src={image} alt={`Earbuds in ${variant.color} color`} />
    </div>
  ));

  return (
    <>
      <div className={productStyles.gallery}>{imageList}</div>
      <div
        className={productStyles.imageContainer}
        style={{ backgroundImage: `url(${variant.images[selectedIndex]})` }}
      ></div>
    </>
  );
};
export default EarbudsGallery;
