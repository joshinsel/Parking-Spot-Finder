//import logo from './logo.svg';
import { BrowserRouter as Router, Link, Routes, Switch, Route } from 'react-router-dom' 

import Home from './Pages/Home'
import Header from './Components/Header'
import FindSpot from './Pages/FindSpot'
import './App.css'

function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Parking Pal
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}/> 
          <Route path="/find-spot" element={<FindSpot/>}/>
        </Routes> 
      </Router>
    </div>
    // <div>
    // <Header/>
      
    // </div>
  );
}

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
          <Header headerText = {"Welcome to Parking Pal!"}/>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find-spot">Find Spot</Link>
          </li>
          {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  )
        }

export default App;
