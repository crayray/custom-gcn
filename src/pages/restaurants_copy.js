import { globalStyles } from '../styles/globalStyles.js'
import PageBody from '../components/PageBody'
import React,{ useEffect } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import MapLayout from '../components/restaurants/MapLayout'
import { Global } from '@emotion/core'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import styled from '@emotion/styled'


export default function restaurants({data}) {

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
function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])
  
    return (
        <Root className="siteRoot">
         <Menu />
        <SEO title="Restaurants" description="Check out minority owned restaurants near you!" />
        <Container>
          <PageTitle>Restaurants</PageTitle>
          <MapLayout/>
        </Container>
        {/* <Footer /> */}
        <Global styles={globalStyles} />
        </Root>
      

    )
}