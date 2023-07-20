import React from 'react'
import styled from 'styled-components';

//styled-component 생성
//하나의 컴포넌트처럼 사용
const Box1 = styled.div`
    width: 32px;
    height: 32px;
    background: red;
`;

const Box2 = styled.div`
    width: 64px;
    height: 64px;
    background: orange;
`;

const Box3 = styled.div`
    width: 96px;
    height: 96px;
    background: yellow;
`;

const Box4 = styled.div`
    width: 128px;
    height: 128px;
    background: green;
`;

const Box5 = styled.div`
    width: 160px;
    height: 160px;
    background: blue;
`;

const Box6 = styled.div`
    width: 192px;
    height: 192px;
    background: indigo;
`;

const Box7 = styled.div`
    width: 224px;
    height: 224px;
    background: violet;
`;

const StyledComponent = () => {
  return (
    <div style={{display: 'flex'}}>
        <Box1></Box1>
        <Box2></Box2>
        <Box3></Box3>
        <Box4></Box4>
        <Box5></Box5>
        <Box6></Box6>
        <Box7></Box7>
    </div>
  )
}

export default StyledComponent