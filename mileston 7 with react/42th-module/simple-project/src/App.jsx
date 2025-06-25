
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/BookMark/Bookmark'
import { useState } from 'react'

function App() {

  const [bookmarks, setbookmarks] = useState([])

  const heandelbookmarks = (b) => {
    const newBookMarks =[...bookmarks,b]
    setbookmarks(newBookMarks)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto mt-4 items-center'>
        <Header></Header>
        <main className='flex'>
          <Blogs heandelbookmarks={heandelbookmarks}></Blogs>
          <Bookmark bookmarks={bookmarks}></Bookmark>
        </main>
      </div>
    </>
  )
}

export default App
