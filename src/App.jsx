import { useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchAllUsers } from './sanity/services/userService'

import './App.css'
import MovieCard from './components/MovieCard'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Home from './components/Home'
import ComparePage from './components/ComparePage'
import GenresPage from './components/GenresPage'
import Header from './components/Header'
import GenrePage from './components/GenrePage'

function App() {

  const [users, setUsers] = useState([])
  const [compareToUser, setCompareToUser] = useState('')
  const [userName, setUserName] = useState('')
  const [logedIn, setLogedIn] = useState(()=>{
    const data = localStorage.getItem("logedIn")
    const logedInData = JSON.parse(data)
    return logedInData || false
  })
  const location = useLocation()
  // Kilde til hvordan bruke useLocation: https://medium.com/codingbeauty-tutorials/react-router-get-current-route-9c2e6bd8d689

  function handleClick(user){
    localStorage.setItem("userToCompare", JSON.stringify(user));
    setCompareToUser(user)
  }

  useEffect(()=>{
    const getAllUsers = async ()=> {
        const data = await fetchAllUsers()
        setUsers(data)
    }
    getAllUsers()
  },[])  

  useEffect(()=>{
    if (location.pathname === "/"){
      setLogedIn(false)
      localStorage.setItem("logedIn", false)
    } 
  },[location])

  if (!logedIn && location.pathname !== "/"){
    return <Navigate to="/" />
  }
  
  return (
    <>
      <Layout logedIn={logedIn} setLogedIn={setLogedIn} userName={userName} setUserName={setUserName} >
        <Routes>
            <Route path="/" element={<Login users={users} setUsers={setUsers} setLogedIn={setLogedIn} />}/>
            <Route path="/Home" element={<Home users={users} userName={userName} />}/>
            <Route path="/ComparePage/:slug" element={<ComparePage />} ></Route>
            <Route path="/GenresPage" element={<GenresPage />} ></Route>
            <Route path='/GenrePage/:slug' element={<GenrePage/>}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
