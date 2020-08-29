import React from 'react'
import GoogleMapWrapper from '../components/restaurants/GoogleMapWrapper'
import DataMenu from '../components/restaurants/RestaurantMenu'
import RestaurantCard from '../components/restaurants/RestaurantCard'
import SEO from '../components/SEO'
import { Global } from '@emotion/core'
import Menu from '../components/Menu'
import Container from '../components/Container'
import styled from '@emotion/styled'
import { globalStyles } from '../styles/globalStyles.js'
require('prismjs/themes/prism.css')



const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Search = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`
export default class RestaurantsLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurants: restaurants,
      searchField: '',
      cuisineFilter: ' ',
      selectedRestaurant: '',
      markerLat: '',
      infoboxMessage: '',
    }
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

  render() {
    const cuisineFilteredRestuarants = this.state.restaurants.filter(
      restaurant => {
        return restaurant.cuisine
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      }
    )
    return (
      <Root className="siteRoot">
        <Menu />
        <SEO
          title="Restaurants"
          description="Check out minority owned restaurants near you!"
        />
   
        <DataMenu onSearchChange={this.onSearchChange} />
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
        {/* <Container> */}
        <h1>Checkout for restaurants near you:</h1>
        <GoogleMapWrapper
          restaurants={this.state.restaurants}
          handleSelect={this.handleMarkerSelect}
          className="map"
        />

        
        {/* </Container> */}
        <Global styles={globalStyles} />
      </Root>
    )
  }
}

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
