// GoogleMapWithMarker.jsx

// Import React
import * as React from 'react'

// Import necessary components for React Google Maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'

// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json')

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
const GoogleMapWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{
        lat: 30.293818, // latitude for the center of the map
        lng: -97.734308, // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles, // change default map styles
      }}
    >
      {props.restaurants.map((restaurant, index) => (
        <div className="marker">
          <Marker
            className="marker"
            key={index}
            icon={{
              url: 'http://localhost:8000/pindrops/bgfc_pindrops_purple.svg',
              scaledSize: new window.google.maps.Size(60, 60),
            }}
            position={{
              lat: restaurant.lat,
              lng: restaurant.lng,
            }}
            onClick={() =>
              props.handleMarkerClick(
                restaurant.name,
                restaurant.lat,
                restaurant.lng,
                restaurant.desc,
                restaurant.yelp
              )
            }
          />
        </div>
      ))}

      {props.isInfoboxVisible && (
        <InfoWindow
          position={{
            lat: props.infoboxPosY,
            lng: props.infoboxPosX,
          }}
          onCloseClick={() => props.handleInfoboxClick()}
        >
          <div>
            <div>
              <div>
                <img src="http://localhost:3001/Brown-Girls-Food-Club-Logo-01.svg"></img>

                <h4>{props.infoboxMessage}</h4>
                <h4>{props.desc}</h4>
                <h4>{props.yelp} </h4>
        
               
                
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ))
)

// Export Google Map component
export default GoogleMapWithMarker
