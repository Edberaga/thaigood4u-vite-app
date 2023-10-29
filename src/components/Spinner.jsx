import React from 'react'
import spinner from '../assets/images/spinner.svg'

export default function Spinner() {
  return (
    <section className='spinner'>
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </section>
  )
}