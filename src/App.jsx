import { useState } from 'react'
import { Link } from 'react-router-dom'

import './App.css'
import MovieCard from './components/MovieCard'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Home from './components/Home'

function App() {


  return (
    <>
      <Layout>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Home" element={<Home />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
