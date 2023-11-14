import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';

/*Features Import */
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import Affliate from './components/Dashboard/Affliate';
import Submission from './components/Dashboard/Submission';
import Badges from './components/Dashboard/Badges';

function App() {
  return (
  <>
  <main className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path='/dashboard'element={<Dashboard/>} />
        <Route path='/dashboard/submission'element={<Submission/>} />
        <Route path='/dashboard/badges'element={<Badges/>} />
        <Route path='/dashboard/affliate'element={<Affliate/>} />
      </Route>
    </Routes>
  </main>
  </>
  )
}

export default App