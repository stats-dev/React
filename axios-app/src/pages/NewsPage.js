import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
    const params = useParams();

    const category = params.category || 'all'; //비어있으면 all, 아니면 params.category

  return (
    <>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </>
  )
}

export default NewsPage