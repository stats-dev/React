//createContext로 생성한 context를 export한다.
import {createContext, useState} from 'react';

const ColorContext = createContext({
    state: {color: 'black', subColor: 'red'},
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

//Provider를 리턴하는 컴포넌트
const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subColor, setSubColor] = useState('red');

    const value = {
        state: {color, subColor},
        actions: {setColor, setSubColor}
    }

    return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}

//Consumer 리턴하는 컴포넌트
//ColorConsumer == ColorContext.Consumer
const {Consumer: ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};

export default ColorContext;