import Header from "../Components/Header"
import Map from "../Components/map/Map"

const FindSpot = () => {
  const location = {lat: 40.748817, lng: -73.985428, address: "20 W 34th St, New York, NY 10001", name: "Empire State Building"};

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
          <label htmlFor="cars">Choose Car Size:</label>
            <select name="cars"  className="car-size-select">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          <label htmlFor="distance">Choose Distance:</label>
            <select name="distance"  className="distance-select">
              <option value=".1">0.1 mi</option>
              <option value=".25">0.25 mi</option>
              <option value=".5">0.5 mi</option>
              <option value="1">1 mi</option>
            </select>
          </div>
      </div>
    </div>
  )
}   

export default FindSpot