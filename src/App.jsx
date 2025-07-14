import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Home from './Home'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
