import React from 'react';
import './Signup.css';
function Signup() {
  return (
    <div className='signup-container'>
        <div className="signup-contentBox">
            <div className="signup-h1">
                <h1>Signup</h1>
            </div>
            <form action="">
                <div className="signup-form">
                
                    <input placeholder='Email' type="email" />
                    <input placeholder='Full-Name' type="text" />
                    <input placeholder='Phone' type="text" />
                    <input placeholder='Address' type="text" />
                    <input placeholder='City' type="text" />
                    <input placeholder='Province' type="text" />
                </div>
                <div>
                    <button className="submit-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup
