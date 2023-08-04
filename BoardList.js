import React, { useEffect, useState } from 'react';
import BoardListItem from './BoardListItem';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        const getBoardList = async () => {
            try {
                const response = await axios.get('http://localhost:9090/board/board-list', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        page: page
                    }
                });

                console.log(response);
                if(response.data && response.data.pageItems.content) {
                    setBoardList(() => response.data.pageItems.content);
                    setTotalPages(() => response.data.pageItems.totalgPages);
                    setPageNumber(() => response.data.pageItems.pageable.pageNumber);
                    setPageSize(() => response.data.pageItems.pageable.pageSize);
                }
            } catch(e) {
                console.log(e);
            }
        }
        
        getBoardList();
    }, []);

    const clickPrevNext = (num) => {
        setPage((prev) => prev + num);
    }

    const changePage = (num) => {
        setPage(() => num - 1);
    }
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>게시글 목록</h3>
        <form id="searchForm" >
            <table style={{width: '700px', borderCollapse: 'collapse', border: '1px solid black'}}>
            <tr>
                <td style={{textAlign: 'right'}}>
                <select name="searchCondition">
                    <option value="all">전체</option>
                    <option value="title">제목</option>
                    <option value="content">내용</option>
                    <option value="writer">작성자</option>
                </select>
                <input type="text" name="searchKeyword"></input>
                <button type="button" id="btnSearch">검색</button>
                </td>
            </tr>
            </table>
        </form>

        <table id="boardTable" style={{width: '700px', borderCollapse: 'collapse', border: '1px solid black'}}>
            <tr>
                <th style={{background: 'skyblue', width: '100px'}}>번호</th>
                <th style={{background: 'skyblue', width: '200px'}}>제목</th>
                <th style={{background: 'skyblue', width: '150px'}}>작성자</th>
                <th style={{background: 'skyblue', width: '150px'}}>등록일</th>
                <th style={{background: 'skyblue', width: '100px'}}>조회수</th>
            </tr>
            {boardList && boardList.map(board => <BoardListItem key={board.boardNo} board={board}></BoardListItem>)}
            
        </table>
        <br/>
        <Pagination totalgPages={totalgPages} pageNumber={pageNumber} pageSize={pageSize} clickPrevNext={clickPrevNext} changePage={changePage}></Pagination>
        <br/>
        <Link to="/insert-board">새 글 등록</Link>
    </div>
  );
};

export default BoardList;