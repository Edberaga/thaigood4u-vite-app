import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async() => {
      try{
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        setData(docSnap.data());
      }
      catch(error){
        console.log(error);
      }
    };
    getUserData();
  },[]);

  
  console.log("Doc : ", data);

  const logOut = async() => {
    try{
      signOut(auth);
      navigate("/");
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <>
    <header className="App-header" style={{textAlign: "center"}}>
        <h2>Thaigoo4u Affliate Program</h2>
        <h4>Sign up as: {data.name} </h4>
    </header>
    </>
  )
}

export default Header