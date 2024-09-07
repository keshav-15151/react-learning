import { useState } from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Footer />
    <Home />
    </>
  )
}

export default App
