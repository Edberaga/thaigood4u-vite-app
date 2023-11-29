import { useState } from 'react';
import { submittedData } from './data'
import ReactPaginate from 'react-paginate';

const SubmittedItem = () => {
  return (
  <>
  {submittedData.map((par, index) => {
    return(
    <div key={index} className='display-box'>
      <div className='display-proofs'>
        <h3>{par.name}</h3>
        <div className="display-images">
          <img src={par.receiptImg} alt="Receipt Photo" />
          <img src={par.selfieImg} alt="Selfie Photo" />
        </div>
        <p>{par.date}</p>
        <span style={{backgroundColor: par.status === "Approved" ? "green" : "orange"}}>{par.status}</span>
      </div>
    </div>
    )
    })}
  </>
  )
};

const Submitted = ({ itemsPerPage }) => {
  
  return (
  <section className="display-container">
    <SubmittedItem />
  </section>
  )
}

export default Submitted