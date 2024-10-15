
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>

    </>
  )
}

export default App