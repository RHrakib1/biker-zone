import React from 'react'
import Book from './Book'

export default function Bookmark({ bookmarks,reading }) {
    return (
        <div className='md:w-1/3'>
            <h1>Reading time now:{reading}</h1>
            <div className='bg-gray-300 rounded-2xl shadow-2xl m-6 p-5'>
                {
                    bookmarks.map(book=><Book book1={book}></Book>)
                }

            </div>
        </div>
    )
}
