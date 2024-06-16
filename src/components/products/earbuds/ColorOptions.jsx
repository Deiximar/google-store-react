const colors = ["blue", "beige", "dark-gray", "light-gray", "green", "salmon"];
const ColorOptions = () => {
  const colorList = colors.map((color, index) => (
    <li key={index}>
      <button className={`${color}, earbud-color`}> </button>
    </li>
  ));

  console.log(colorList);
  return (
    <div className="earbud-menu-options">
      <p>Choose a color</p>
      <ul className="earbud-variants">{colorList}</ul>
    </div>
  );
};
export default ColorOptions;
