    import Colors from "../components/Colors"
    
    const ColorOptionsE = () => {
        const colors = ['blue', 'beige', 'dark-gray', 'light-gray', 'green', 'salmon'];
      
        return (
          <div className="menu-options">
            <p>Choose a color</p>
            <ul className="options">
              {colors.map((color, index) => (
                <Colors key={index} color={color} />
              ))}
            </ul>
          </div>
        );
      };
export default ColorOptionsE;



