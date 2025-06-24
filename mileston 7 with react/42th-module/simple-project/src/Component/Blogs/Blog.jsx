import React from 'react'

export default function Blog({b}) {
    const {id,author_img,title,author,}=b
  return (
    <div>
        <h3>{id}</h3>
        <h1>Title:{title}</h1>
        <span>{author}</span>
        <img className='rounded-full size-8' src={author_img} alt="" />
    </div>
  )
}
