import React from 'react';

const FileList = ({boardFileList}) => {
  return (
    
    <>
        {boardFileList && boardFileList.map(boardFile => (
            <div style={{display: 'inline-block', position: 'relative', width: '150px', height: '120px',
                margin: '5px', border: '1px solid #00f', zIndex: 1}}>
                <input type="file" style={{display: 'none'}}></input>
                        <img style={{width: '100%', height: '100%', zIndex: 'none',
                            cursor: 'pointer'}} class="fileImg" src={`http://localhost:9090/upload/${boardFile.boardFileName}`}
                            ></img>

                <input type="button" class="btnDel" value="x" style={{width: '30px', height: '30px', position: 'absolute',
                    right: '0px', bottom: '0px', zIndex: 999,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#f00'}} onclick="fnImgDel(event)"></input>
                <p style={{display: 'inline-block', fontSize: '8px', cursor: 'pointer'}}>
                </p>
            </div>
        ))} 
    </>
  );
};

export default FileList