import React, {useContext} from 'react'
import './steps.css'
import { multiStepContext } from '../../StepContext'

function FirstStep() {
    const{setcurrentStep,userData,setuserData, handleChnage} = useContext(multiStepContext);
  return (
    <div className='signup-container'>
    <div className="signup-contentBox">
        <div className="signup-h1">
        
        </div>
        
            <div className="signup-form">
            
            
                <input value={userData.fullname} onChange={handleChnage}  name='fullname' placeholder='Full-Name' type="text" />
                <input value={userData.phone} onChange={handleChnage} name='phone' placeholder='Phone' type="text" />
             

            </div>
            <div>
          
                <button className="submit-button" onClick={()=>setcurrentStep(2)} >
                    Next
                </button>
            </div>
       
    </div>
    {/* {showPopup && (
    <div className="popup">
      <div className="popup-content">
        <h2>Signup Successful</h2>
        <button className='close-button' onClick={closePopup}>Close</button>
      </div>
    </div>
  )} */}
    </div>
  )
}

export default FirstStep
