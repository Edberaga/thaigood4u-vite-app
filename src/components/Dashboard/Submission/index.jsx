import React, { useState } from 'react'
import noImage from '../../../assets/images/no-image.png'
import './style.scss'

const Submission = () => {
  const [receipt, setReceipt] = useState("");
  const [selfie, setSelfie] = useState("");

  return (
  <section className='container'>
    {/*Submission Form */}
    <section className="form-container">
      <div className="image-display">
        <div>
        <h1>Your Receipt</h1>
          <div className='image-border'>
          <img 
              src={
              receipt ? URL.createObjectURL(receipt)
              :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
              alt="Insert photo"
          />
          </div>
        </div>

        <div>
        <h1>Your Selfie</h1>
        <div className='image-border'>
          <img 
              src={
              selfie ? URL.createObjectURL(selfie)
              :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
              alt="Insert photo"
          />
        </div>
        </div>
      </div>

      <form className='proof-submission' action="">
        <label for='restaurant-name'>Restaurant Name</label>
        <input type='text' id='travelName' required/>

        <label for="photoUrl">Receipt Photo</label>
        <input 
            type="file" 
            id='photoUrl'
            size="60"
            className='input-file'
            onChange={(e) => setReceipt(e.target.files[0])}
            required
        />
        
        <label for="selfieUrl">Selfie Photo</label>
        <input 
            type="file" 
            id='selfieUrl'
            size="60"
            onChange={(e) => setSelfie(e.target.files[0])}
            required
        />
        <button type="submit">Submit Photo</button>
      </form>
    </section>
    <hr/>
    
    {/*Submission display */}
    <section className="display-container">
      <div className='display-box'>
        <div className='display-proofs'>
          <h3>Warkop Hau</h3>
          <div className="display-images">
            <img src={noImage} alt="Receipt Photo" />
            <img src={noImage} alt="Selfie Photo" />
          </div>
          <p>24/07/1999</p>
          <span>Submitted</span>
        </div>
      </div>
    </section>
  </section>
  )
}

export default Submission