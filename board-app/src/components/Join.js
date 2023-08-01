import React from 'react';
import '../css/Join.css';

const Join = () => {
  return (
    <div className="form-wrapper">
        <form id="modifyForm">
            <h3>회원가입</h3>
            <div className="label-wrapper">
                <label htmlFor="userId">아이디</label>
            </div>
            <div>
                <input type="text" id="userId" name="userId" required style={{width: 'auto'}}></input>
                <button type="button" id="btnIdCheck" style={{width: '70px'}}>중복체크</button>
            </div>
            <div className="label-wrapper">
                <label htmlFor="userPw">비밀번호</label>
            </div>
            <input type="password" id="userPw" name="userPw" required></input>
            <p id="pwValidation" style={{color: 'red', fontSize: '0.8rem'}}>
            비밀번호는 영문자, 숫자, 특수문자 조합의 9자리 이상으로 설정해주세요.
            </p>
            <div className="label-wrapper">
                <label htmlFor="userPwCheck">비밀번호 확인</label>
            </div>
            <input type="password" id="userPwCheck" name="userPwCheck" required></input>
            <p id="pwCheckResult" style={{fontSize: '0.8rem'}}></p>
            <div className="label-wrapper">
                <label htmlFor="userName">이름</label>
            </div>
            <input type="text" id="userName" name="userName" required></input>
            <div className="label-wrapper">
                <label htmlFor="userEmail">이메일</label>
            </div>
            <input type="email" id="userEmail" name="userEmail" required></input>
            <div className="label-wrapper">
                <label htmlFor="userTel">전화번호</label>
            </div>
            <input type="text" id="userTel" name="userTel" placeholder="숫자만 입력하세요."></input>
            <div style={{display: 'block', margin: '20px auto'}}>
                <button type="submit">회원가입</button>
            </div>
        </form>
    </div>
  );
};

export default Join;