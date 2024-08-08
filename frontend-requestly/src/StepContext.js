import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import App from './App';
export const multiStepContext=React.createContext();
 const StepContext =()=> {
    // const navigate=useNavigate();
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
        setuserData('');
        setcurrentStep(1);
        // navigate("/maleRequest")
    }
    const handleChnage = (event) =>{
        const { name, value } = event.target;
      setuserData({ ...userData, [name]: value });
     
    }
    const [selectedCategory, setSelectedCategory] = useState("General");

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  return (
    <div>
      <multiStepContext.Provider value={{currentStep,setcurrentStep,userData,setuserData,finalData,setfinalData, submitData, handleChnage,selectedCategory,setSelectedCategory,handleCategoryChange}}>
        <App/>
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
