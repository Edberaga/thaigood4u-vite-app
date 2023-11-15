import React, { useState } from 'react'
import noImage from '../../../assets/images/no-image.png'
import './style.scss'

const Submission = () => {
  const [file, setFile] = useState("");

  return (
    <section className='container'>
    {/*Submission Form */}
      <div className="form-container">
        <div className="image-display">
        <img 
            src={
            file ? URL.createObjectURL(file)
            :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
            alt="Insert photo"
        />
        </div>

        <form className='proof-submission' action="">
            <label for='restaurant-name'>Restaurant Name</label>
            <input type='text' id='travelName' required/>
            <input 
                type="file" 
                id='photoUrl'
                size="60"
                onChange={(e) => setFile(e.target.files[0])}
                required
            />
            <button type="submit">Submit Photo</button>
        </form>
      </div>
    
    {/*Submission display */}
      <div className="display-container">
        
      </div>
    </section>
  )
}

export default Submission