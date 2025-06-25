import React from 'react'
import { FaRegBookmark } from "react-icons/fa6";

export default function Blog({ b, heandelbookmarks, heandleReading }) {
    const { id, author_img, title, author, cover, reading_time, post_date, hashtag } = b
    return (
        <div className='mb-20'>
            <img className='w-full mb-5 rounded-2xl' src={cover} alt="mal nai" />
            <div className='mb-4 flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-14 rounded-full size-14' src={author_img} alt="" />
                    <div>
                        <span className='font-bold text-xl'>{author}</span>
                        <p className='text-sm'>{post_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => heandelbookmarks(b)} className='text-red-700 text-xl'><FaRegBookmark /></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <a>{hashtag}</a><br />
            <button className='text-sm text-fuchsia-500' onClick={() => heandleReading(reading_time)}><a>Mark as read</a></button>
        </div>
    )
}
