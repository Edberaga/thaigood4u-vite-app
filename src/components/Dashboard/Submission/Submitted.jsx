import React from 'react'

import receiptImg from '../../../assets/images/OIP.jpeg'
import selfieImg from '../../../assets/images/me.jpg'

const Submitted = () => {
  return (
  <section className="display-container">

  <div className='display-box'>
    <div className='display-proofs'>
      <h3>Warkop Hau</h3>
      <div className="display-images">
        <img src={receiptImg} alt="Receipt Photo" />
        <img src={selfieImg} alt="Selfie Photo" />
      </div>
      <p>24/07/1999</p>
      <span>Submitted</span>
    </div>
  </div>

  <div className='display-box'>
    <div className='display-proofs'>
      <h3>Warkop Hau</h3>
      <div className="display-images">
        <img src={receiptImg} alt="Receipt Photo" />
        <img src={selfieImg} alt="Selfie Photo" />
      </div>
      <p>24/07/1999</p>
      <span>Submitted</span>
    </div>
  </div>

  <div className='display-box'>
    <div className='display-proofs'>
      <h3>Warkop Hau</h3>
      <div className="display-images">
        <img src={receiptImg} alt="Receipt Photo" />
        <img src={selfieImg} alt="Selfie Photo" />
      </div>
      <p>24/07/1999</p>
      <span>Submitted</span>
    </div>
  </div>

  </section>
  )
}

export default Submitted