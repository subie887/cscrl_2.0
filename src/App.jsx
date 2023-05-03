import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Conferences from './pages/Conferences'
import Research from './pages/Research'
import Calendar from './pages/Calendar'
import Contacts from './pages/Contancts'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/conferences' element={<Conferences />} />
        <Route path='/research' element={<Research />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App