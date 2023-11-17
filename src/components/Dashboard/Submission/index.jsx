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
        <img 
            src={
            receipt ? URL.createObjectURL(receipt)
            :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
            alt="Insert photo"
        />
        </div>
        <div>
        <img 
            src={
            selfie ? URL.createObjectURL(selfie)
            :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
            alt="Insert photo"
        />
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
    
    {/*Submission display */}
      <div className="display-container">
        
      </div>
    </section>
  )
}

export default Submission