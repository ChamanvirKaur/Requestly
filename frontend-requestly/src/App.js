import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // it will import Router to do this we need to install react-router-dom
import Landing from './Components/landing-page/Landing';
import Header from './Components/header/Header';
import Signup from './Components/signup/Signup';
function App() {
 
  return (
   <Router>
    <>
      <Header/>
     <Switch>
     <Route path="//">
        <Landing/>
      </Route>

      <Route path="/Signup">
        <Signup/>
      </Route>

     </Switch>
    </>
   </Router>

    
  );
}



export default App;
