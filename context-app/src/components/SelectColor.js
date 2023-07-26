import React from 'react'


//색상 표에 표출할 색상 배열
const colorArr = ['black', 'red', 'green', 'blue', 'yellow', 'orange', 'gray', 'violet'];

const SelectColor = () => {
  return (
    <div>
        <h1>색상 선택</h1>
        <div style={{display: 'flex'}}>
            {colorArr && colorArr.map(
                // 고유한 color만으로 key 값을 넣는다.
                // color => (
                //     <div key={color} style={{width: '25px', height: '25px', background: color, cursor: 'pointer'}}></div>
                // )
                // index받아서 처리해도 된다. 중복을 고려한다면?
                (color, index) => (
                    <div key={index} style={{width: '25px', height: '25px', background: color, cursor: 'pointer'}}></div>
                )
            )}
        </div>
        <hr></hr>
    </div>
  )
}

export default SelectColor