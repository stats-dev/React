import React from 'react'
import { useParams } from 'react-router-dom'
//아티클 상세페이지
const Article = () => {
    //url 파라미터 받아주기(비구조할당)
    const {id} = useParams();

    //url 파라미터 받아주기
    // const params = useParams();

    // const id = params.id;
  return (
    <div>
        <h1>Article</h1>
        <h2>게시글 {id}</h2>
    </div>
  )
}

export default Article