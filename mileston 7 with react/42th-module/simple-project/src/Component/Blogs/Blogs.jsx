import React, { useEffect, useState } from 'react'
import Blog from './Blog'

export default function Blogs({ heandelbookmarks,heandleReading }) {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>
            <h1>calculatoin:{blogs.length}</h1>
            {
                blogs.map(b => <Blog
                    heandelbookmarks={heandelbookmarks}
                    heandleReading={heandleReading}
                    b={b}
                ></Blog>)
            }
        </div>
    )
}
