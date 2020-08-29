import React from 'react'
// import NavBar from "../components/NavBar";
import GoogleMapWrapper from './GoogleMapWrapper'
import DataMenu from './RestaurantMenu'
import RestaurantCard from './RestaurantCard'
import '../../styles/RestaurantStyles.css'

import styled from '@emotion/styled'
require('prismjs/themes/prism.css')

//The body component below;
const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100px;
  grid-gap: 1rem;
`

const Map = styled.div`
  grid-column: 1;
`
const Filter = styled.div`
  grid-column: 2;
`

const restaurants = [
  {
    name: 'Casa Columbia',
    lat: 30.260846,
    lng: -97.714576,
    desc: 'A columbian place',
    cuisine: 'Columbian',
    yelp: 'https://www.yelp.com/biz/casa-colombia-austin-2',
  },
  {
    name: 'Usta Kababgy',
    lat: 30.365631,
    lng: -97.69501,
    desc: 'A Turkish place',
    cuisine: 'Turkish',
    yelp: 'https://www.yelp.com/biz/usta-kababgy-austin',
  },
  {
    name: "Aster's Ethiopian",
    lat: 30.287478,
    lng: -97.725037,
    desc: 'An Ethiopian place',
    cuisine: 'Ethiopian',
    yelp: 'https://www.yelp.com/biz/asters-ethiopian-restaurant-austin',
  },
  {
    name: 'Himalaya Kosheli',
    lat: 30.432962,
    lng: -97.770067,
    desc: 'A Nepali place',
    cuisine: 'Nepali',
    yelp: 'https://www.yelp.com/biz/himalaya-kosheli-austin',
  },
  {
    name: "Sassy's Vegetarian SOUL Food",
    lat: 30.264578,
    lng: -97.727277,
    desc: 'A vegetarian Soul food place',
    cuisine: 'Soul Food/Vegetarian',
    yelp: 'https://www.yelp.com/biz/sassys-vegetarian-soul-food-austin-3',
  },
]

export default class RestaurantsLayout extends React.Component {
  state = {
    restaurants: restaurants,
    searchField: '',
    cuisineFilter: ' ',
    selectedRestaurant: '',
    markerLat: '',
    infoboxMessage: '',
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value,
    })
  }

  handleSelect = (message, lang, lat) => {
    console.log(message)
    console.log(lang)
    console.log(lat)
  }

  // handleMarkerClick = (message, lang, lat ) => {
  //   this.setState({
  //     infoboxMessage: message, // Message shown in info window
  //     isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
  //     markerLang: lang + 0.006, // Y coordinate for positioning info window
  //     markerLat: lat - 0.0004, // X coordinate for positioning info window
  //     selectedRestaurant: message

  //   })
  // }

  render() {
    const cuisineFilteredRestuarants = this.state.restaurants.filter(
      restaurant => {
        return restaurant.cuisine
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      }
    )
    return (
      <Body>
        <Container>
          <h1>Checkout for restaurants near you:</h1>
          <DataMenu
            onSearchChange={this.onSearchChange}
            styles={{ textAlign: 'right', display: 'block' }}
          />
          {cuisineFilteredRestuarants.map((restaurant, index) => (
            <RestaurantCard
              href="#restaurants"
              key={index}
              desc={restaurant.desc}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              yelp={restaurant.yelp}
            />
          ))}
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
              Search our list of restaurants by cuisine:
            </h1>
          <Map>
            <GoogleMapWrapper
              restaurants={this.state.restaurants}
              handleSelect={this.handleMarkerSelect}
            //   className="map"
            />
          </Map>
        </Container>
      </Body>
    )
  }
}
