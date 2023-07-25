import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // //onClick에 사용할 메소드입니다.
  // const loadData = () => {
  //   //axios로 api 데이터 받아오기
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then 
  //   (response => {
  //     console.log(response);
  //     setData(response.data);
  //   })

  // }

  //화살표함수는 매개변수 앞에 async를 넣는다.
  const loadData = async() => {
    try {
      //Promise 객체를 받아줄 변수
      // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apikey=adb38bcb0e1f4de382236eac45a5ccfb');

      console.log(response);
      setData(response.data);      
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <button onClick={loadData}>데이터 불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data)} readOnly={true}></textarea>}
    </div>
  );
}

export default App;
