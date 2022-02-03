import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom' 

import Header from './Components/Header'
import FindSpot from './Pages/FindSpot'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}/> 
          <Route path="/find-spot" element={<FindSpot/>}/>
        </Routes> 
      </Router>
    </div>
  )
}

const Layout = () => {
  return (
    <div>
      <Header headerText = {"Welcome to Parking Pal!"}/>
      <nav className="nav">
        <ul>
          <li >
            <Link className="nav-item" to="/">Home</Link>
          </li>
          <li >
            <Link className="nav-item" to="/find-spot">Find Spot</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
