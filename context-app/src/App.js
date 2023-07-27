import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";
import {ColorProvider} from "./contexts/color";

function App() {
  return (
    //<ColorContext.Provider value={값}> 이것과 동일해진다고 볼 수 있다?
    <ColorProvider>
      <div>
        <SelectColor></SelectColor>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>    
  );
}

export default App;
