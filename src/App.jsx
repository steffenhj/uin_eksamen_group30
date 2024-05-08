import { useState } from 'react'
import { Link } from 'react-router-dom'
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

function App() {

  const [users, setUsers] = useState([])
  const [compareToUser, setCompareToUser] = useState('')

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

  return (
    <>
      <Layout>
        <Routes>
            <Route path="/" element={<Login users={users} setUsers={setUsers}/>}/>
            <Route path="/Home" element={<Home users={users} handleClick={handleClick} />}/>
            <Route path="/ComparePage" element={<ComparePage />} ></Route>
            <Route path="/GenresPage" element={<GenresPage />} ></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
