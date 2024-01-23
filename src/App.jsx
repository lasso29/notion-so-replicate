import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import Footer from './Footer'
import Box from './Box'
import Contain from './Contain'
import Carousel from './Carousel'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Landingpage/>
    <Box/>
    <Carousel/>
    <Contain/>
    <Footer/>
    </>
  )
}

export default App
