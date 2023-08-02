import React from 'react';
import { Link } from 'react-router-dom';

const Board = () => {
  return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h3>게시글 상세</h3>
                <form id="updateForm">
                    <table style={{borderCollapse: 'collapse'}}>
                        <tr>
                            <td style={{background: 'skyblue', width: '70px'}}>
                                제목
                            </td>
                            <td style={{textAlign: 'left'}}>
                                <input type="text" name="boardTitle" id="boardTitle"></input>
                            </td>
                        </tr>
                        <tr>
                            <td style={{background: 'skyblue'}}>
                                작성자
                            </td>
                            <td style={{textAlign: 'left'}}>
                                <input type="text" name="boardWriter" id="boardWriter" readonly></input>
                            </td>
                        </tr>
                        <tr>
                            <td style={{background: 'skyblue'}}>
                                내용
                            </td>
                            <td style={{textAlign: 'left'}}>
                                <textarea name="boardContent" id="boardContent" cols="40" rows="10"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td style={{background: 'skyblue'}}>
                                작성일
                            </td>
                            <td style={{textAlign: 'left'}}>
                            </td>
                        </tr>
                        <tr>
                            <td style={{background: 'skyblue'}}>
                                조회수
                            </td>
                            <td style={{textAlign: 'left'}}>
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
                                        style={{display:'none'}} multiple></input>
                                    <p style={{color: 'red', fontSize:'0.9rem'}}>
                                        파일을 변경하려면 사진을 파일을 다운로드하려면 파일명을 클릭하세요.
                                    </p>
                                    <div id="attZone">
                                        <div style={{display: 'inline-block', position: 'relative', width: '150px', height: '120px',
                                            margin: '5px', border: '1px solid #00f', zIndex: 1}}>
                                            <input type="file" style={{display: 'none'}}></input>
                                                    <img style={{width: '100%', height: '100%', zIndex: 'none',
                                                        cursor: 'pointer'}} class="fileImg"></img>

                                                    <img src="/images/defaultFileImg.png"
                                                        style={{width: '100%', height: '100%', zIndex: 'none',
                                                        cursor: 'pointer'}} class="fileImg"
                                                        ></img>

                                            <input type="button" class="btnDel" value="x" style={{width: '30px', height: '30px', position: 'absolute',
                                                right: '0px', bottom: '0px', zIndex: 999,
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                color: '#f00'}} onclick="fnImgDel(event)"></input>
                                            <p style={{display: 'inline-block', fontSize: '8px', cursor: 'pointer'}}>
                                            </p>
                                            </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr id="btnWrap">
                            <td colspan="2" align="center">
                                <button type="button" id="btnUpdate">수정</button>
                            </td>
                        </tr>
                    </table>
                </form>
                <hr/>
            <Link to="/insert-board.do">글 등록</Link>
            <Link to="#" id="btnDelete">글 삭제</Link>
            <Link to="/board-list">글 목록</Link>
        </div>
    
  )
}

export default Board