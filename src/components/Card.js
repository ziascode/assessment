import React from 'react';

function Card({title, thumbnail, link, category, desc}) {
  return (
    <div className='flex'>
        <div>
            <img src={thumbnail} alt="" />
        </div>
        <div className="info">
            <p>{category}</p>
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={link}><button>View Case Study</button></a>
        </div>
    </div>
  )
}

export default Card