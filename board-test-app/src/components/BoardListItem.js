import React from 'react';
import styled from 'styled-components';

const BoardListItemBlock = styled.div`
    display: flex;
    width: 800px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const BoardCell = styled.div`
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.25;
    border: 1px solid black;
`;

const BoardListItem = ({board}) => {
    const{boardNo, boardTitle, boardWriter, boardRegdate, boardCnt} = board;
  return (
    <BoardListItemBlock>
        <BoardCell style={{width: '100px'}}>{boardNo}</BoardCell>
        <BoardCell style={{width: '350px'}}>{boardTitle}</BoardCell>
        <BoardCell style={{width: '70px'}}>{boardWriter}</BoardCell>
        <BoardCell style={{width: '200px'}}>{boardRegdate}</BoardCell>
        <BoardCell style={{width: '100px'}}>{boardCnt}</BoardCell>
    </BoardListItemBlock>
  );
};

export default BoardListItem;