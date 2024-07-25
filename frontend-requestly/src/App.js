import React,{useEffect} from 'react';
import './App.css';
import Typed from 'typed.js'; // before importing typed.js you need to install it using npm install typed.js
import Landing from './Components/landing-page/Landing';

function App() {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.auto-type', {
      strings: ["Media", "Creative", "Print", "Social Media", "Other"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

    // Cleanup function to destroy the instance of Typed.js
    return () => {
      typed.destroy();
    };
  }, []);
  return (
   <>

      <Landing/>
    </>

    
  );
}



export default App;
