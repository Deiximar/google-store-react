const ImageWatch = ({ describe, imagePath, productColor }) => {
  return (
    <>
      <img alt={describe} src={imagePath} />
      <p> {productColor}</p>
    </>
  );
};
export default ImageWatch;
