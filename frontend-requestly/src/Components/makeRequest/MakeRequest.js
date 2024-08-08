import React, { useState } from 'react'
import FirstForm from '../requestForm-pages/FirstForm'
import SecondForm from '../requestForm-pages/SecondForm'
import ThirdForm from '../requestForm-pages/ThirdForm'
import FourthForm from '../requestForm-pages/FourthForm'
import {Stepper, StepLabel, Step, MobileStepper} from '@mui/material'
import './MakeRequest.css'
function MakeRequest() {
    const[page,setpage]=useState(0);
    const FormTitles=["Sign Up","personal Info", "Other","Price"];
    const FormDisplay = () =>{
       if(page === 0){
        return <FirstForm/>
       }

       else if(page === 1){
        return <SecondForm/>
       }
       else if(page===2){
        return <ThirdForm/>
       }
       else{
        return <FourthForm/>
       }
    }
  return (
    <div className='form'>
        <div className='progressbar'>
            <div style={{ width: page === 0 ? "33%" : page === 1 ? "66%" : "100%" , backgroundColor:"green", height:"10px" , transition:"1s",borderRadius:"20px"}}></div>
        </div>
        {/* <div className='form-container'>
            <h1>{FormTitles[page]}</h1>
        </div> */}
        <div className='request-form-body'>
            {FormDisplay()}
        </div>
        <div className='request-button-container'>
            <button disabled={page==0} onClick={()=> {setpage((currpage)=>currpage - 1)}}> Previous </button>
            <button disabled={page == FormTitles.length-1} onClick={()=> {setpage((currpage)=>currpage + 1)}}> {page === FormTitles.length - 1 ? "Submit": "Next"} </button>
        </div>
     
    
    
    </div>
  )
}

export default MakeRequest
