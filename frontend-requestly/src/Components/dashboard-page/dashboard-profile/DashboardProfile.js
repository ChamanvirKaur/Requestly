import React from 'react';
import './DashboardProfile.css'

function DashboardProfile() {
  return (
    <div className='dashboard-profilecontainer'>
        <h1>Profile</h1>
          <div className="dashboard-profileinfo">
                
                    <input  name='email'  placeholder='Email' type="email" />
                   
                    <input   name='password' placeholder='Password' type="password" />
                   
                    <input   name='fullname' placeholder='Full-Name' type="text" />
                   
                    <input   name='phone' placeholder='Phone' type="text" />
                   
                    <input  name='address' placeholder='Address' type="text" />
                    
                    <input  name='city' placeholder='City' type="text" />
                    
                    <input   name='province' placeholder='Province' type="text" />
                    
                </div>
              
    </div>
  )
}

export default DashboardProfile
