import GoogleMapReact from 'google-map-react'
import { API_KEY } from '../../secrets'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text, color }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" color={color} />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ spots, zoomLevel, defaultLocation }) => (
  <div className="map">
    {/* <h2 className="map-h2">Find your Location</h2> */}

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultLocation}
        defaultZoom={zoomLevel}
      >
      <LocationPin 
        key={defaultLocation.lat}
        color={"green"}
        lat={defaultLocation.lat}
        lng={defaultLocation.lng}
        text={defaultLocation.address}
      />  
      {
        spots.map((location, i) => {
          return (
            <LocationPin 
              key={location.lat}
              color={"red"}
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          )
        })
      }
      </GoogleMapReact>
    </div>
  </div>
)

export default Map
