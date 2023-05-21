import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Conferences from './pages/Conferences'
import Research from './pages/Research'
import Calendar from './pages/Calendar'
import Contacts from './pages/Contancts'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Layout from './components/Layout'
import SingleConference from './pages/SingleConference'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        {/* Main Website */}
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/conferences' element={<Conferences />} />
          <Route path='/conferences/:confname' element={<SingleConference />} />
          <Route path='/research' element={<Research />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
