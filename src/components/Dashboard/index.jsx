import React from 'react'
import { GetUserData } from '../../hooks/GetUserData'
import userProfile from '../../assets/images/user-profile.png'
import { Link } from 'react-router-dom'
import { accountSettingData } from '../../data/account-setting'
import './style.scss'

import NoImg from '../../assets/images/no-image.png'

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
      <h3>Engaged Member</h3>
      <p>Name <span>Edbert</span></p>
      <p>Email <span>edbertjonnathan@gmail.com</span></p>
    </div>
  </section>

  <section className="profile-info">
    {/*For Unverified
    <div className='profile-unverified'>
      <p>User haven't done the Membership Verification. <Link to='./verify'>Click Here to Verify yourself</Link> </p>
    </div>
    */}
    <div className='profile-member'>
    <h3>Member Information</h3>
    <table>
      <tr>
        <th>Full Name</th>
        <td>Jonnathan Edbert Halim</td>
      </tr>
      <tr>
        <th>WhatsApp No. </th>
        <td>+6282169622989</td>
      </tr>
      <tr>
        <th>Phone Number </th>
        <td>+6282169622989</td>
      </tr>
      <tr>
        <th>Date of Birth</th>
        <td>24/07/1999</td>
      </tr>
      <tr>
        <th>Residence</th>
        <td>Indonesia</td>
      </tr>
      <tr>
        <th>Preffered Travelled Destination</th>
        <td>Beach Destination</td>
      </tr>
      <tr>
        <th>Travel Preferences</th>
        <td>
          <span>1. Adventure</span>
          <span>2. Relaxation</span>
          <span>3. Luxury</span>
        </td>
      </tr>
      <tr>
        <th>Preferred Accommodation</th>
        <td>Hotel, Guesthouse, Alternative: Couch</td>
      </tr>
      <tr>
        <th>Travel Budget</th>
        <td>$ 10,000</td>
      </tr>
    </table>
    </div>
  </section>

  <section className="profile-activity">
    <div>
      <h3>Activity</h3>
      <div className='images-display'>
        <img src={NoImg} alt="No Image Icon" />
      </div>

      <Link to='./submission'>
        <button>
          Submit Proof Of Travel
        </button>
      </Link>
    </div>
  </section>
  </section>

  <section className='setting-dashboard'>
    <section className="badges-display">
      <h3>Badges</h3>
      <div>
        <p>Member Have No Badges Currently.</p>
      </div>
      <Link to='./badges'>  
        <button>
          Check All Badges
        </button>
      </Link>
    </section>
    
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