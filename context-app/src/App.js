import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";
import {ColorProvider} from "./contexts/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor></SelectColor>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>    
  );
}

export default App;
