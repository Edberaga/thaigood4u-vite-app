import { useState } from 'react'
import './style.scss'
import Submitted from './Submitted'

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
        <label htmlFor='travel-name'>Restaurant Name</label>
        <input type='text' id='travel-name' required/>

        <label htmlFor="photoUrl">Receipt Photo</label>
        <input 
          type="file" 
          id='photoUrl'
          size="60"
          className='input-file'
          onChange={(e) => setReceipt(e.target.files[0])}
          required
        />
        
        <label htmlFor="selfieUrl">Selfie Photo</label>
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
    
    <Submitted itemsPerPage={3}/>
  </section>
  )
}

export default Submission