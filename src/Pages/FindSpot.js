import { useState } from 'react'

import Header from "../Components/Header"
import Map from "../Components/map/Map"
import { findSpots } from "../utils"

const FindSpot = () => {
  const [distance, setDistance] = useState(0)

  const location = {lat: 40.748817, lng: -73.985428, address: "20 W 34th St, New York, NY 10001", name: "Empire State Building"};
  const testLocation = {lat: 40.750797, lng: -73.989578, address: "151 W 34th St, New York, NY 10001", name: "Macy's"};


  const handleDistanceChange = event => {
    setDistance(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
    console.log(findSpots(testLocation, distance))
  }

  return (
    <div>
      <Header headerText = {"Find a Spot"}/>
      <div className="select-panel">
        <div className="map-section">
          <Map
            location={location}
            zoomLevel={14}
          />
        </div>
        <div className="select-section">
          <form onSubmit={(e)=>submitHandler(e)}>
            <label htmlFor="cars">Choose Car Size:</label>
              <select name="cars"  className="car-size-select">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            <label htmlFor="distance">Choose Distance:</label>
              <select name="distance"  className="distance-select" onChange={(e) => {handleDistanceChange(e)}}>
                <option value=".1">0.1 mi</option>
                <option value=".25">0.25 mi</option>
                <option value=".5">0.5 mi</option>
                <option value="1">1 mi</option>
              </select>
              <input type="submit" value="Submit" />
            </form>  
        </div>
      </div>
    </div>
  )
}   

export default FindSpot