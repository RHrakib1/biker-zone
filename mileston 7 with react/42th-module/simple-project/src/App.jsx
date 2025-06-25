
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/BookMark/Bookmark'

function App() {


  return (
    <>
      <div className='max-w-7xl mx-auto mt-4 items-center'>
        <Header></Header>
        <main className='flex'>
          <Blogs></Blogs>
          <Bookmark></Bookmark>
        </main>
      </div>
    </>
  )
}

export default App
