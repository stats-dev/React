import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/pagination.css';

const Pagination = ({totalPages, pageNumber, pageSize, clickPrevNext, changePage}) => {
    
    const startPage = Math.floor(pageNumber / pageSize) * pageSize + 1;
    const tempEndPage = startPage + pageSize - 1;
    const endPage = tempEndPage > totalPages ? totalPages : tempEndPage;
    const pageArr = [];

    for(let i = startPage; i <= endPage; i++) {
        pageArr.push(i);
    }


  return (
    <div style={{textAlign: 'center'}}>
        <ul className="pagination">
            <li className="pagination-btn">
                <Link onClick={(e) => {
                    e.preventDefault();
                    clickPrevNext(-1);
                }}>
                이전
                </Link>
            </li>

            <li className="pagination-btn">
                {/* for문으로 돌리고, map을 쓴다. */}
                {pageArr && pageArr.map(
                    // num의 값을 뽑아낸다.
                    num => <Link>{num}</Link>
                )}

            </li>

            <li className="pagination-btn">
                <Link onClick={(e) => {
                        e.preventDefault();
                        clickPrevNext(1);
                    }}>               
                    다음
                    </Link>
            </li>
        </ul>
    </div>
  );
};

export default Pagination;