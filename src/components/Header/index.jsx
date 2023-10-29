import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import './style.css'
import { useAuthState } from 'react-firebase-hooks/auth';

const Topbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = async() => {
    try {
      signOut(auth);
      navigate("/");
    }
    catch(error) {
      console.log(error);
    }
  }

  if(!user) {
  return(
    <section className='topbar'>
      <section className='container'>
        <ul>
          <Link to='/login'><li>Login</li></Link>
          <Link to='/register'><li>Register</li></Link>
        </ul>
      </section>
    </section>
  )}

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  
  if(user) {
    return(
      <section className='topbar'>
        <section className='container'>
        <ul>
          <li>Hey, {user.displayName}</li>
          <li onClick={logOut}>Logout</li>
          <li style={{textAlign: 'left'}}>Dashboard</li>
        </ul>
        </section>  
      </section>
    )
  }
}

const Header = () => {
  const navigate = useNavigate();

  return (
  <>
  <Topbar/>
    <header className="App-header" style={{textAlign: "center"}}>
      <div style={{fontFamily: "Cuvia, serif"}} >
        <h2>Thaigoo4u Affliate Program</h2>
      </div>
      
    </header>
  </>
  )
}

export default Header