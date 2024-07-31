import React, { useState } from 'react'

import App from './App';
export const multiStepContext=React.createContext();
 const StepContext =()=> {
    const [currentStep,setcurrentStep]=useState(1);
    const [userData,setuserData] =useState({
        fullname : "",
        phone : "",
        email : "",
        password :"",
        address : "",
        city : "",
        province : ""
 });
    const [finalData,setfinalData]=useState([]);
    const submitData=()=>{
        setfinalData(finalData=>[...finalData, userData]);
        console.log(finalData)
        setuserData('')
        setcurrentStep(1)
    }
    const handleChnage = (event) =>{
        const { name, value } = event.target;
      setuserData({ ...userData, [name]: value });
     
    }
  return (
    <div>
      <multiStepContext.Provider value={{currentStep,setcurrentStep,userData,setuserData,finalData,setfinalData, submitData, handleChnage}}>
        <App/>
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
