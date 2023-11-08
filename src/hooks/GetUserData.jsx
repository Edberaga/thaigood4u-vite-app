import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { getDoc } from 'firebase/firestore';

export const GetUserData = () => {
  const user = auth.currentUser;
  const userData = getDoc(db, "users", user.uid);
  if(user !== null) {
    const loggedUser = {
      role: userData.role,
      name: user.displayName,
      email: user.email,
      img: userData.img,
      isEngaged: userData.isEngaged
    }
    if(loggedUser.isEngaged === true) {
      loggedUser.code = userData.code;
      loggedUser.inviterCode = userData.inviterCode;
    }
    
    console.log(user);
    console.log(loggedUser);
    
    return loggedUser
  }
}
