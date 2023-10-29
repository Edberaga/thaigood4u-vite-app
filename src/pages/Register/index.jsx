import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db} from '../../firebase';
import './index.css';

export default function Register() {
  const [data, setData] = useState({});
  let navigate = useNavigate();
  const defaultPassword= "Saysheji5432";

  const handleRegister = async(e) => {
    e.preventDefault();
    try{
      /*Add User to the Firebase Auth */
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        defaultPassword
      );
      updateProfile(auth.currentUser, {
        displayName: data.username,
      });
      /*This will add the rest data, to the Firestore "User" doc*/
      /*It's "users" NOT "user"... */
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1);
    }catch(err){
      console.log(err);
    }
  }

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({...data, [id]:value});
    console.log(data);
  };

  return (
  <>
  <section 
    className="border p-4 white" 
    style={{
      maxWidth: '400px', 
      margin: '5vw auto'
  }}>
    <h1 style={{textAlign: "center"}}>Add new user</h1>
    
    {/*Name*/}
    <div className="form-group">
      <label>Name</label>
      <input 
        type="text"
        className='form-control'
        placeholder='Enter your User Name'
        id="name"
        onChange={handleInput}
      />
    </div>

    {/*Email*/}
    <div className="form-group">
      <label>Email</label>
      <input 
        type="text"
        className='form-control'
        placeholder='Enter the User Email'
        id="email"
        onChange={handleInput}
      />
    </div>

    {/*Invitation Code*/}
    <div className="form-group">
      <label>Invitation Code</label>
      <input 
        type="text"
        className='form-control'
        placeholder='Enter User Invitation Code'
        id="code"
        onChange={handleInput}
      />
    </div>

    {/*Invited by Code*/}
    <div className="form-group">
      <label>Inviter Code</label>
      <input 
        type="text"
        className='form-control'
        placeholder='Enter the Invitation Code of the User Inviter'
        id="inviterCode"
        onChange={handleInput}
      />
    </div>

    {/*User Emblem*/}
    <div className="form-group">
      <label htmlFor="role">Role</label>
      <select id="role" onChange={handleInput}>
        <option>Select the User Role</option>
        <option value="None">None</option>
        <option value="Gold">Gold</option>
        <option value="Premium">Premium</option>
        <option value="Exclusive">Exclusive</option>
      </select>
    </div>
    
    <div style={{textAlign: 'center', marginTop: '5%'}}>
      <button className="form-btn" onClick={handleRegister}>Register</button>
    </div>`
  </section>
  </>
)}