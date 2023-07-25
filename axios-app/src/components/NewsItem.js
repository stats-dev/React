import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;

    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }

        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }


    & + & {
        margin-top: 3rem;
    }

`

const NewsItem = ({article}) => {
    //비구조할당
    const {title, description, url, urlToImage} = article;

  return (
    <NewsItemBlock>
        {/* article.urlToImage 비구조할당 안하면 이렇게 접근해도 된다. */}
        {urlToImage && (
        <div className='thumbnail'>
            <a href={url} target='_blank'>
                <img src={urlToImage} alt='기사썸네일'></img>
            </a>
        </div>
        )}
        <div className='contents'>
            <h2>
                <a href={url} target='_blank'>
                    {/* 이미지가 안들어가므로 바로 title 넣는다. */}
                    {title}
                </a>
            </h2>
            <p>
                {description}
            </p>
        </div>
    </NewsItemBlock>
  )
}

export default NewsItem