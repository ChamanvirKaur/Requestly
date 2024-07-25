import React from 'react'
import  './Landing.css'
function Landing() {
  return (

     <>
      <div className="body">
        {/* header-text class contains the basic information and types of marketing request we provide */}
        <div className="header-text">
          {/* information about app */}
          <div className="info-text">
              <h1>Requestly</h1>
              <p>Make any marketing related request with our simple and easy to understand platform <span>Requestly</span></p>
          </div>
          {/* types of service we provide */}
          <div className="request-types-text">
            <h3>Request you can send is <span className='auto-type'></span> Request </h3> 
          </div>
        </div>

        <div className="auth-buttons">
          <div className="sign-up">
            <button className='sign-up-button'>Sign-up</button>
          </div>
          <div className="login">
            <button className='login-button'>Login</button>
          </div>
        </div>
      </div>
 </>
  )
}

export default Landing
