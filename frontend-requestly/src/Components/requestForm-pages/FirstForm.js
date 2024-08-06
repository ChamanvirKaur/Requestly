import React from 'react'
import './request.css'

function FirstForm() {
  return (
    <div>
        <h2>Select type of request </h2>
        <select className='requestFormInput' name="" id="cars">
            <option value="volvo">Marketing</option>
            <option value="saab">Creative</option>
            <option value="opel">Social Media</option>
            <option value="audi">Media</option>
            <option value="audi">Print</option>
            <option value="audi">Other</option>
        </select>
    </div>
  )
}

export default FirstForm
