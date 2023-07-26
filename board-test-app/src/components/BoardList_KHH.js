import React, { useState, useEffect } from 'react'
import axios from "axios";

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [currentPage, setCurrentPage] = useState([1]);

    
    useEffect(() => {
        const boardData = async() => {
            
            try {
                const response = await axios.get(`http://localhost:9090/api/board-list?page=${currentPage - 1}`)
                setBoards(response.data.pageItems.content);

            } catch (error) {
                console.error(error);
            }

        };

        boardData();
    }, []);



  return (
    
    <div className='App'>
      <div>
        {boards && <pre>{JSON.stringify(boards, null, 2)}</pre>};
      </div>
      <div>
        {/* 페이지 이동 버튼 */}
        <button onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>이전 페이지</button>
        <span>현재 페이지: {currentPage}</span>
        <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>다음 페이지</button>
      </div>

    </div>
  );
}

export default BoardList