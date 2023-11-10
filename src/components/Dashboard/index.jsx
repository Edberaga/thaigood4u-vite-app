import React from 'react'
import { GetUserData } from '../../hooks/GetUserData'
import userProfile from '../../assets/images/user-profile.png'
import { Link } from 'react-router-dom'
import { accountSettingData } from '../../data/account-setting'
import './style.scss'

const Dashboard = () => {
  return (
  <section className='dashboard container'>
    <section className='main-dashboard'>
    {/*User Profile Section*/}
      <section>
        <div className='profile-pic'>
            <img src={userProfile} width="85px" alt="User Profile Pic" />
            <Link>Change Photo</Link>
        </div>
        <div>
          <h3>Unverified Member</h3>
          <p>Name <span>Edbert</span></p>
          <p>Email <span>edbertjonnathan@gmail.com</span></p>
        </div>
      </section>

      <section className="profile-info">
        {/*For Unverified */}
        <div className='profile-unverified'>
          <p>User haven't done the Membership Verification. <Link to='./dashboard/verify'>Click Here to Verify yourself</Link> </p>
        </div>
      </section>
    </section>

    <section className='setting-dashboard'>
      {/*
      <section className="badges-display">
        badges here
      </section>
      */}
      <section className="account-setting">
        <h3>Account Setting</h3>
        {accountSettingData.map((par, index) => {
          return (
            <div key={index}>
            <Link>
              {par.icon}
              <p>{par.name}</p>
            </Link>
          </div>
          )
        })}
      </section>
    </section>
  </section>
  )
}

export default Dashboard