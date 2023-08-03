import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import FileList from './FileList';

const Board = () => {
    const {boardNo} = useParams();
    const navi = useNavigate();

    const [board, setBoard] = useState(null);
    const [boardFileList, setBoardFileList] = useState(null);

    useEffect(() => {
        const getBoard = async () => {
            try {
                const response = await axios.get(`http://localhost:9090/board/board/${boardNo}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                });

                console.log(response);
                if(response.data && response.data.item.board) {
                    setBoard(() => response.data.item.board);
                    setBoardFileList(() => response.data.item.boardFileList);
                }
            } catch(e) {
                console.log(e);
            }
        }

        getBoard();
    }, []);

    const deleteBoard = useCallback((e) => {
        e.preventDefault();

        const deleteBoardAxios = async () => {
            try {
                const response = await axios.delete(`http://localhost:9090/board/board/${boardNo}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                });

                console.log(response);

                if(response.data && response.data.item.msg) {
                    alert(response.data.item.msg);
                    navi('/board-list');
                }
            } catch(e) {
                console.log(e);
            }
        }

        deleteBoardAxios();
    }, []);
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>게시글 상세</h3>
        <form id="updateForm">
            <table style={{borderCollapse: 'collapse', border: '1px solid black'}}>
                <tr>
                    <td style={{background: 'skyblue', width: '70px'}}>
                        제목
                    </td>
                    <td style={{textAlign: 'left'}}>
                        <input type="text" name="boardTitle" id="boardTitle" value={board ? board.boardTitle : ''}></input>
                    </td>
                </tr>
                <tr>
                    <td style={{background: 'skyblue'}}>
                        작성자
                    </td>
                    <td style={{textAlign: 'left'}}>
                        <input type="text" name="boardWriter" id="boardWriter" readonly value={board ? board.boardWriter : ''}></input>
                    </td>
                </tr>
                <tr>
                    <td style={{background: 'skyblue'}}>
                        내용
                    </td>
                    <td style={{textAlign: 'left'}}>
                        <textarea name="boardContent" id="boardContent" cols="40" rows="10" value={board ? board.boardContent : ''}></textarea>
                    </td>
                </tr>
                <tr>
                    <td style={{background: 'skyblue'}}>
                        작성일
                    </td>
                    <td style={{textAlign: 'left'}}>
                        {board ? board.boardRegdate : ''}
                    </td>
                </tr>
                <tr>
                    <td style={{background: 'skyblue'}}>
                        조회수
                    </td>
                    <td style={{textAlign: 'left'}}>
                        {board ? board.boardCnt : ''}
                    </td>
                </tr>
                <tr>
                    <td style={{background: 'skyblue', width: '70px'}}>
                        첨부파일
                    </td>
                    <td style={{textAlign: 'left'}}>
                        <div id="image_preview">
                            <input type="file" id="btnAtt" name="uploadFiles" multiple></input>
                            <input type="file" id="changedFiles" name="changedFiles"
                                   style={{display: 'none'}} multiple></input>
                            <p style={{color: 'red', fontSize: '0.9rem'}}>
                                파일을 변경하려면 사진을 파일을 다운로드하려면 파일명을 클릭하세요.
                            </p>
                            <div id="attZone">
                                {boardFileList 
                                ? 
                                <FileList boardFileList={boardFileList}></FileList>
                                :
                                null}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr id="btnWrap">
                    <td colspan="2" style={{textAlign: 'center'}}>
                        <button type="button" id="btnUpdate">수정</button>
                    </td>
                </tr>
            </table>
        </form>
        <hr/>
        <Link to="/insert-board">글 등록</Link>
        <Link to="#" id="btnDelete" onClick={deleteBoard}>글 삭제</Link>
        <Link to="/board-list">글 목록</Link>
    </div>
  );
};

export default Board;