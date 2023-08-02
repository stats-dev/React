import axios from 'axios';
import React, { useCallback } from 'react';
import {Link} from 'react-router-dom';

const InsertBoard = () => {
    const uploadFiles = [];

    const changeFiles = useCallback((e) => {
        console.log(e.target.files);

        const fileList = Array.prototype.slice.call(e.target.files);

        fileList.forEach(file => {
            uploadFiles.push(file);
        });
    }, []);

    const insertBoard = useCallback((e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        //FormData를 객체로 만들어서 
        //업로드되는 파일을 추가한 객체를 데이터로 전송
        const formDataObj = {};

        //기존 formData에 담긴 내용을 formDataObj에 담아주기
        formData.forEach((value, key) => (formDataObj[key] = value));

        //업로드 파일 객체에 추가
        formDataObj.uploadFiles = uploadFiles;

        const insertBoardAxios = async () => {
            try {
                const response = await axios.post('http://localhost:9090/board/board', formDataObj, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
                        "Content-Type": "multipart/form-data"
                    }
                });

                console.log(response);
            } catch(e) {
                console.log(e);
            }
        }

        insertBoardAxios();
    }, []);  

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>새 글 등록</h3>
        <form id="insertForm" onSubmit={insertBoard}>
            <table style={{borderCollapse: 'collapse', border: '1px solid black'}}>
            <tr>
                <td style={{background: 'skyblue', width: '70px'}}>
                제목
                </td>
                <td style={{textAlign: "left"}}>
                <input type="text" name="boardTitle"></input>
                </td>
            </tr>
            <tr>
                <td style={{background: 'skyblue'}}>
                작성자
                </td>
                <td style={{textAlign: "left"}}>
                <input type="text" name="boardWriter" readonly value={sessionStorage.getItem("userId")}></input>
                </td>
            </tr>
            <tr>
                <td style={{background: 'skyblue', width: '70px'}}>
                내용
                </td>
                <td style={{textAlign: "left"}}>
                <textarea name="boardContent" cols="40" rows="10"></textarea>
                </td>
            </tr>
            <tr>
                <td style={{background: 'skyblue', width: '70px'}}>
                파일첨부
                </td>
                <td>
                <div id="image_preview">
                    <input type="file" id="btnAtt"
                        name="uploadFiles" multiple onChange={changeFiles}></input>
                    <div id="attZone"
                        data-placeholder="파일을 첨부하려면 파일선택 버튼을 누르세요.">
                    </div>
                </div>
                </td>
            </tr>
            <tr>
                <td colspan="2" style={{textAlign: "center"}}>
                    <button type="submit" id="btnInsert">새 글 등록</button>
                </td>
            </tr>
            </table>
        </form>
        <hr/>
        <Link to="/board-list">글 목록</Link>
    </div>
  );
};

export default InsertBoard;