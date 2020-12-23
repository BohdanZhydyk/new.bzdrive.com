import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'


const App = ()=>{
  return (
    <BrowserRouter className="APP">

      <Header />

      <Main />

      <Footer />

    </BrowserRouter>
  )
}

export default App
