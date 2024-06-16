     const ColorOptions = () => {
        const colors = ['blue', 'beige', 'dark-gray', 'light-gray', 'green', 'salmon'];
        const colorList = colors.map((color, index) => (
            <li key={index}>
            <button className={`${color}, color`}> </button>
            </li>
            
          ))
        return (
          <div className="menu-options">
            <p>Choose a color</p>
            <ul className="options">
              {colorList}
            </ul>
          </div>
        );
      };
export default ColorOptions;



