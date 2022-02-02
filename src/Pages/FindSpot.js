import Header from "../Components/Header"

const FindSpot = () => {
  return (
    <div>
      <Header headerText = {"Find a Spot"}/>
      <div className="select-panel">
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
  )
}   

export default FindSpot