import React from 'react'
import { useParams } from 'react-router-dom';

const profiles = {
    go: {
        name: "고기천",
        job: "강사"
    },
    kang: {
        name: "강홍길동",
        job: "의적"
    }
};
const Profile = () => {
    //url 파라미터 받아주기
    const params = useParams();
    
    //지정한 키값으로 profilㄷ에서 꺼내쓸 수 있다.
    const selectedProfile = profiles[params.firstName];
  return (
    <div>
        <h1>Profile</h1>
        {selectedProfile ? (
            <div>
                <h2>{selectedProfile.name}</h2>
                <p>{selectedProfile.job}</p>
            </div>
        ) : (
            // void profile은 이렇게 작성. 삼항연산자 이용.
            <p>notExist Profile</p>
        )
        }
    </div>
  )
}

export default Profile