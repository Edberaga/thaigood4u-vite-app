import React from 'react'
import { GetUserData } from '../../hooks/GetUserData'
import userProfile from '../../assets/images/user-profile.png'

const Dashboard = () => {
  return (
  <section className='container'>
    <section>
      {/*User Profile Section*/}
      <section>
        <div>
            <img src={userProfile} alt="User Profile Pic" />
        </div>
        <div>
          <h1>Unverified Member</h1>
          <p>Name: <span>Edbert</span></p>
          <p>Email: <span>edbertjonnathan@gmail.com</span></p>
        </div>
      </section>
    </section>
      <section></section>
  </section>
  )
}

export default Dashboard