import React, {useState, useCallback, useEffect, useRef} from 'react';

function App() {
  //유일한 값을 만들때..useRef  //useRef를 DOM이 아닌 javascript에서도 유일한 값으로 사용할 수 있다.
  const nextId = useRef(1);

  // const [nextId, setNextId] = useState(1);

  const [form, setForm] = useState({username: "", password: ""});
  const [data, setData] = useState({
    array: [],
    uValue: null
  });

  //input의 value가 변경됐을 때 실행될 메소드
  const inputValChange = useCallback((e) => {
    //비구조할당으로 e.target(이벤트가 발생한 DOM 태그)의 속성값 받기
    //name값은 username이나 password
    //value는 input의 value
    const {name, value} = e.target;

    // console.log("e.target===========> " + e.target);

    // console.log("e.target.name=======> " + name);
    // console.log("e.target.value======> " + value);

    setForm({
      //현재 form의 값을 그대로 사용
      //{username: "", password: ""}
      ...form,
      //username: "",
      //password: ""
      [name]: value
      //password input에 값을 입력했다고 가정하면
      //username: "",
      //password: 입력한 값
    });
    /*form => {
      username: "",
      password: 입력한 값
    }*/
  }, [form]);

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault(); //submit 방지
    const info = {
      id: nextId.current, //이러면 1부터 담기겠다.
      username: form.username,
      password: form.password
    }

    setData({
      ...data,
      array: data.array.concat(info) //data는 객체형태이므로 array로 변환해줘야 한다. concat은 array 변환 필요.
    });

    setForm({
      username: "",
      password: ""
    });

    // setNextId(nextId + 1);
    nextId.current += 1;
  }, [data, form.username, form.password]); //모든 데이터 바뀌면 생성되도록 함.

  const deleteUserInfo = useCallback((id) => {
    setData({
      ...data,
      //array의 filter 메소드 사용해서 삭제 기능 만들기
      //filter 메소드는 조건에 맞는 값들로만 이뤄진 새로운 배열을 리턴
      array: data.array.filter(info => info.id !== id)
    });
  }, [data]);

  return (
    <form onSubmit={handleSubmit}>
      <input name="username"
             placeholder="id"
             value={form.username}
             onChange={inputValChange}></input>
      <input name="password"
             placeholder="pw"
             value={form.password}
             onChange={inputValChange}></input>
      <button type="submit">등록</button>
      <ul>
        {/* data에 추가되는 username과 password li 태그로 출력, array의 map 메소드 사용해서 ? */}
        {data.array && data.array.map((info) => (
            // <li key={index}>
            //   username: {info.username}, password: {info.password}
            // </li>
            <li key={info.id} onClick={() => deleteUserInfo(info.id)}>
            username: {info.username}, password: {info.password}
          </li>
        ))
        }
      </ul>
    </form>
  );
}

export default App;
