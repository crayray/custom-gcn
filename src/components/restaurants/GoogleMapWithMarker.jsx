// GoogleMapWithMarker.jsx

// Import React
import * as React from 'react'
import styled from '@emotion/styled'

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

const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
  font-size: 13px;
  font-weight: 300;
  padding: 12px;
`
const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 0.5em;
`

const Information = styled.div`
  text-align: center;
  margin: 0.5em;
`

const Yelp = styled.a`
  color: #3088ff !important;
  text-decoration: none;
  text-align: center !important;


  &:visited {
    text-decoration: none;
    color: green !important;
    text-align: center !important;
  }
  &:hover {
    color: red !important;
    text-align: center !important;
  }
  &:link {
    color: #3088ff !important;
  text-decoration: none;
  text-align: center !important;
  }
`

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
          <Container>
            <Header>{props.infoboxMessage}</Header>
            <Yelp href={props.yelp} target="_blank">
              Check them out on Yelp
            </Yelp>
            <Information>{props.desc}</Information>
          </Container>
        </InfoWindow>
      )}
    </GoogleMap>
  ))
)

// Export Google Map component
export default GoogleMapWithMarker
