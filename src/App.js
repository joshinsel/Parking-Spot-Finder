//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

import Home from './Pages/Home'
import Header from './Components/Header'
import FindSpot from './Pages/FindSpot'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome to Parking Pal
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <Route path="/find-spot" element={<FindSpot/>}/> */}
    </div>
    // <div>
    // <Header/>
      
    // </div>
  );
}

export default App;
