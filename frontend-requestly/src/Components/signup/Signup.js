import React, { useState } from 'react';
import './Signup.css';
function Signup() {
    const [showPopup, setShowPopup] = useState(false);
    const[formData,setformData]=useState({
        email : "",
        password :"",
        fullname : "",
        phone : "",
        address : "",
        city : "",
        province : ""

    });
    const[emailError,setemailError]=useState(false);
    const[passwordError,setpasswordError]=useState(false);

    const[fullnameError,setfullnameError]=useState(false);

    const[phoneError,setphoneError]=useState(false);

    const[addressError,setaddressError]=useState(false);

    const[cityError,setcityError]=useState(false);
    const[provinceError,setprovinceError]=useState(false);



    const handleSubmit = (event) => {
      event.preventDefault();
      if(formData.email === "" && formData.password === "" && formData.fullname === "" && formData.phone === "" && formData.address === ""
        && formData.city === "" && formData.province === ""
      ){
        setemailError(true);
        setfullnameError(true);
        setpasswordError(true);
        setphoneError(true);
        setaddressError(true);
        setcityError(true);
        setprovinceError(true);
        }
     
      else if(formData.email === ""){
        setemailError(true);
      }
      else if(formData.password === ""){
        setpasswordError(true);
      }
      else if(formData.fullname === ""){
        setfullnameError(true);
      }
    
      else if(formData.phone === ""){
        setphoneError(true);
      }
      else if(formData.address === ""){
        setaddressError(true);
      }
      else if(formData.city === ""){
        setcityError(true);
      }
      else if(formData.province === ""){
        setprovinceError(true);
      }
     
      
      else {
        setShowPopup(true);
        setemailError(false);
        setpasswordError(false);
        setfullnameError(false);
        setphoneError(false);
        setaddressError(false);
        setcityError(false);
        setprovinceError(false);
      }

      
    };
  
    const closePopup = () => {
      setShowPopup(false);
      setformData({
        email : "",
        password :"",
        fullname : "",
        phone : "",
        address : "",
        city : "",
        province : ""
      })
    };

    const handleChnage = (event) =>{
        const { name, value } = event.target;
      setformData({ ...formData, [name]: value });
      console.log(formData);
    }
  return (
    <div className='signup-container'>
        <div className="signup-contentBox">
            <div className="signup-h1">
                <h1>Signup</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="signup-form">
                
                    <input value={formData.email} name='email' onChange={handleChnage} placeholder='Email' type="email" />
                    {emailError &&  <span style={{color : "red"}}> Please enter email </span>}
                    <input value={formData.password} onChange={handleChnage} name='password' placeholder='Password' type="password" />
                    {passwordError &&  <span style={{color : "red"}}> Please enter password </span>}
                    <input value={formData.fullname} onChange={handleChnage} name='fullname' placeholder='Full-Name' type="text" />
                    {fullnameError &&  <span style={{color : "red"}}> Please enter Full-Name </span>}
                    <input value={formData.phone} onChange={handleChnage} name='phone' placeholder='Phone' type="text" />
                    {phoneError &&  <span style={{color : "red"}}> Please enter phone </span>}
                    <input value={formData.address} onChange={handleChnage} name='address' placeholder='Address' type="text" />
                    {addressError &&  <span style={{color : "red"}}> Please enter address </span>}
                    <input value={formData.city} onChange={handleChnage} name='city' placeholder='City' type="text" />
                    {cityError &&  <span style={{color : "red"}}> Please enter city </span>}
                    <input value={formData.province} onChange={handleChnage} name='province' placeholder='Province' type="text" />
                    {provinceError &&  <span style={{color : "red"}}> Please enter province </span>}

                </div>
                <div>
                    <button className="submit-button" type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Signup Successful</h2>
            <button className='close-button' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Signup