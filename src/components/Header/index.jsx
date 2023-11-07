import React from 'react'
import { auth} from '../../firebase'
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import './style.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Topbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = async() => {
    try {
      signOut(auth);
      toast.success(`User ${auth.currentUser.displayName} has Logged Out`);
      navigate("/");
    }
    catch(error) {
      console.log(error);
    }
  }

  if (loading) {
    return (
      <section className='topbar'>
        <section className='container'>
        </section>
      </section>
    );
  }

  else if (error) {
    toast.error(`Logging Error... ${error}`);
  }

  else if(!user) {
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
  
  else {
    return(
      <section className='topbar'>
        <section className='container'>
        <ul>
          <Link><li>Hey, {user.displayName}</li></Link>
          <Link><li onClick={logOut}>Logout</li></Link>
          <Link to="/dashboard" style={{marginLeft: 'auto'}}><li >Dashboard</li></Link>
        </ul>
        </section>  
      </section>
    )
  }
}

const Header = () => {

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