import React from 'react'
import { ColorConsumer } from '../contexts/color';

//색상 표에 표출할 색상 배열
const colorArr = ['black', 'red', 'green', 'blue', 'yellow', 'orange', 'gray', 'violet'];

const SelectColor = () => {
  return (
    <div>
        <h1 style={{margin: '10px'}}>색상 선택</h1>
        <ColorConsumer>
            {({actions}) => (
                <div style={{display: 'flex', margin: '10px'}}>
                    {colorArr && colorArr.map(
                    // 고유한 color만으로 key 값을 넣는다.
                    // color => (
                    //     <div key={color} style={{width: '25px', height: '25px', background: color, cursor: 'pointer'}}></div>
                    // )
                    // index받아서 처리해도 된다. 중복을 고려한다면?
                    // props 전달 하나도 없이 state 값을 바꾼다.
                    (color, index) => (
                        <div key={index} style={{width: '25px', height: '25px', background: color, cursor: 'pointer'}} 
                        onClick={() => actions.setColor(color)} 
                        onContextMenu={(e) => {
                            e.preventDefault(); //우클릭시 메뉴 안뜨도록 만든다.
                            actions.setSubColor(color);
                        }}></div>
                    )
                )}
            </div>
            )}
        </ColorConsumer>
        <hr></hr>
    </div>
  )
}

export default SelectColor