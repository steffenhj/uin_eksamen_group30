import { useState } from 'react'

import './App.css'
import MovieCard from './components/MovieCard'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {


  return (
    <>
      <Layout>
        <Routes>
            <Route path="/" />
        </Routes>
    </Layout>
    </>
  )
}

export default App
