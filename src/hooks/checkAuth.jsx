import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function checkAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoggedIn(true);
        }
        setCheckingStatus(false);
    });
  }, []);

  return { loggedIn, checkingStatus};
}