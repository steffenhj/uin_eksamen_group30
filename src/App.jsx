import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
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

  function handleClick(user){
    localStorage.setItem("userToCompare", JSON.stringify(user));
    setCompareToUser(user)
  }

  const [userSelected, setUserSelected] = useState(false)

  useEffect(()=>{
    const getAllUsers = async ()=> {
        const data = await fetchAllUsers()
        setUsers(data)
    }
    getAllUsers()
  },[])  

  const [userName, setUserName] = useState('')

  return (
    <>
      <Layout userSelected={userSelected} setUserSelected={setUserSelected} userName={userName}>
        <Routes>
            <Route path="/" element={<Login users={users} setUsers={setUsers} setUserSelected={setUserSelected}/>}/>
            <Route path="/Home" element={<Home users={users} userName={userName} setUserName={setUserName} />}/>
            <Route path="/ComparePage/:slug" element={<ComparePage />} ></Route>
            <Route path="/GenresPage" element={<GenresPage />} ></Route>
            <Route path='/GenrePage/:slug' element={<GenrePage/>}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
