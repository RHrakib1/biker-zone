
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/BookMark/Bookmark'
import { useState } from 'react'

function App() {

  const [bookmarks, setbookmarks] = useState([])

  const [reading, setreading] = useState(0)

  const heandelbookmarks = (b) => {
    const newBookMarks = [...bookmarks, b]
    setbookmarks(newBookMarks)
  }

  const heandleReading = (time, id) => {
    const newReadingTime = reading + time
    setreading(newReadingTime)

    //remove bookmark
    const newRemoved = bookmarks.filter(bok=>bok.id !== id)
    setbookmarks(newRemoved)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto mt-4 items-center'>
        <Header></Header>
        <main className='flex'>
          <Blogs heandleReading={heandleReading} heandelbookmarks={heandelbookmarks}></Blogs>
          <Bookmark reading={reading} bookmarks={bookmarks}></Bookmark>
        </main>
      </div>
    </>
  )
}

export default App
