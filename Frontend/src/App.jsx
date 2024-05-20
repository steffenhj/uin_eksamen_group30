import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchAllUsers } from '../sanity/services/userService'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Home from './components/Home'
import ComparePage from './components/ComparePage'
import GenresPage from './components/GenresPage'
import GenrePage from './components/GenrePage'

function App() {

  const [users, setUsers] = useState([])
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState ({})
  const location = useLocation()  
  // Kilde til hvordan bruke useLocation: https://medium.com/codingbeauty-tutorials/react-router-get-current-route-9c2e6bd8d689
  const [logedIn, setLogedIn] = useState(()=>{
    const data = localStorage.getItem("logedIn")
    const logedInData = JSON.parse(data)
    return logedInData || false
  })

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
  
  return (
    <>
      <Layout logedIn={logedIn} setLogedIn={setLogedIn} userName={userName} setUserName={setUserName} >
        <Routes>
        <Route path="/" element={<Login users={users} setUsers={setUsers} setLogedIn={setLogedIn} />} />
          <Route path="/Home" element={logedIn ? <Home users={users} userName={userName} userData={userData} setUserData={setUserData} /> : <Navigate to="/" />} />
          <Route path="/ComparePage/:slug" element={logedIn ? <ComparePage userData={userData} setUserData={setUserData} userName={userName} /> : <Navigate to="/" />} />
          <Route path="/GenresPage" element={logedIn ? <GenresPage /> : <Navigate to="/" />} />
          <Route path="/GenrePage/:slug" element={logedIn ? <GenrePage /> : <Navigate to="/" />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
