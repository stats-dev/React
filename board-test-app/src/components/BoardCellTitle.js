import React from 'react';
import styled from 'styled-components';


const BoardCellTitleBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const BoardTitleCell = styled.div`
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: bold;
    background: gray;
    border: 1px solid black;
`;

const BoardCellTitle = () => {

  return (
    <BoardCellTitleBlock>
        <BoardCellTitle>게시글 목록</BoardCellTitle>
        <BoardTitleCell style={{width: '100px'}}>번호</BoardTitleCell>
        <BoardTitleCell style={{width: '350px'}}>제목</BoardTitleCell>
        <BoardTitleCell style={{width: '70px'}}>작성자</BoardTitleCell>
        <BoardTitleCell style={{width: '200px'}}>작성일</BoardTitleCell>
        <BoardTitleCell style={{width: '100px'}}>조회수</BoardTitleCell>
    </BoardCellTitleBlock>
  )
}

export default BoardCellTitle