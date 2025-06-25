import React from 'react'

export default function Book({book1}) {
    const {title}=book1
    return (
        <div className='bg-yellow-400 m-5 rounded-xl'>
            <h2 className='p-5 text-3xl'>{title}</h2>
        </div>
    )
}
