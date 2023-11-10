import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';

/*Features Import */
import ListData from './components/Affliate/ListData'
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';

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
        <Route path='/dashboard/affliate-list'element={<ListData/>} />
      </Route>
    </Routes>
  </main>
  </>
  )
}

export default App