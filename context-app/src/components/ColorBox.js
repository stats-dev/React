import React from 'react';
import {ColorConsumer} from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
        {value => (
            <div>
                <div style={{width: '100px', height: '100px', background: value.state.color, 'margin-left': '10px'}}></div>
                <div style={{width: '50px', height: '50px', background: value.state.subColor, 'margin-left': '10px'}}></div>
            </div>
        )}
        {/* {({state}) => (
            <div>
                <div style={{width: '100px', height: '100px', background: state.color}}></div>
                <div style={{width: '50px', height: '50px', background: state.subcolor}}></div>
            </div>
        )} */}
    </ColorConsumer>
  );
};

export default ColorBox;