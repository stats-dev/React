import React from 'react'
import styled from 'styled-components';

//styled-component 생성
//하나의 컴포넌트처럼 사용
const Box1 = styled.div`
// style은 백틱 안에 이렇게 적을 수 있습니다.
    width: 32px;
    height: 32px;
    background: red;
    display: flex;
`;

const Box2 = styled.div`
    width: 64px;
    height: 64px;
    background: orange;
    display: flex;
`;

const Box3 = styled.div`
    width: 96px;
    height: 96px;
    background: yellow;
    display: flex;
`;

const Box4 = styled.div`
    width: 128px;
    height: 128px;
    background: green;
    display: flex;
`;

const Box5 = styled.div`
    width: 160px;
    height: 160px;
    background: blue;
    display: flex;
`;

const Box6 = styled.div`
    width: 192px;
    height: 192px;
    background: indigo;
    display: flex;
`;

const Box7 = styled.div`
    width: 224px;
    height: 224px;
    background: violet;
    display: flex;
`;

const StyledComponent = () => {
  return (
    <>
        {/* 이렇게 Box1 컴포넌트를 불러올 수 있습니다. */}
        <Box1></Box1>
        <Box2></Box2>
        <Box3></Box3>
        <Box4></Box4>
        <Box5></Box5>
        <Box6></Box6>
        <Box7></Box7>
    </>
  )
}

export default StyledComponent