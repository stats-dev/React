import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";
import {ColorProvider} from "./contexts/color";

function App() {
  const test = {
    a: 1,
    b: 2
  };

  const funcObj = {
    a: 1,
    b: 2
  }

  const testFunc = (obj) => {

  }

  testFunc((funcObj) => {

  });
  return (
    //<ColorContext.Provider value={값}>
    <ColorProvider>
      <div>
        <SelectColor></SelectColor>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>    
  );
}

export default App;
