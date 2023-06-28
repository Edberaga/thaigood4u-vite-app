import { useState } from 'react'
import './App.css'
import ListData from './components/Affliate/ListData'
import { Navigate, Route, Router, Routes } from 'react-router-dom'


import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/login';
import Header from './components/Header';
import Register from './components/Register';
import DefaultListData from './components/AffliateDefault/DefaultListData';

function App() {
  const [user] = useAuthState(auth);

  {/*const RequireAuth = ({children}) => {
    return user ? (children) : <Navigate to="/login"/>
  };*/}

  return (
    <>
    <Header/>
    <main className="App">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route >
            <Route path='/' element={<ListData/>}/>
            <Route path='/default' element={<DefaultListData/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
    </main>
    </>
  )
}

export default App
