import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import EmailForm from './components/EmailForm'
import Counters from './components/Counters'
import BlogPosts from './components/BlogPosts'

function App() {
  const [count, setCount] = useState(0)

  //<EmailForm />
  //<Counters />
  return (
    <>
      <BlogPosts />
    </>
  )
}

export default App
