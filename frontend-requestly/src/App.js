import './App.css';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'; // it will import Router to do this we need to install react-router-dom
import Landing from './Components/landing-page/Landing';
import Header from './Components/header/Header';
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login';
import Dashpage from './Components/dashboard-page/Dashpage';


function App() {
 
  return (
   <Router>
    <>
      <Header/>
     <Routes>
     <Route path="//" element={ <Landing/>}/>
       
    

      <Route path="/Signup" element={<Signup/>}/>
    

       
      <Route path="/Login" element={  <Login/>}/>
    
  
      <Route path="/Dashboard" element={<Dashpage/>}/>
        
     
     </Routes>
    </>
   </Router>

    
  );
}



export default App;
