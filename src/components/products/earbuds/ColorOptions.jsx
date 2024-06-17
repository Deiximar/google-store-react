const ColorOptions = ({ variants, onClick }) => {
  const colorList = variants.map((variant) => (
    <li key={variant.id}>
      <button
        className={`${variant.color} earbud-color`}
        onClick={() => onClick(variant.id)}
      ></button>
    </li>
  ));

  return (
    <div className="earbud-menu-options">
      <p>Choose a color</p>
      <ul className="earbud-variants">{colorList}</ul>
    </div>
  );
};
export default ColorOptions;
