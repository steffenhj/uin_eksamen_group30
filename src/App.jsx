import { useState } from 'react'

import './App.css'
import MovieCard from './components/MovieCard'

function App() {


  return (
    <>
      <Layout>
        <Routes>
            <Route path="/" element={<MovieCard/>}/>
        </Routes>
    </Layout>
    </>
  )
}

export default App
