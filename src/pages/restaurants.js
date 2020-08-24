import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'


export default function restaurants({data}) {
    return (
        <Layout>
        <SEO title="Restaurants" description="Check out minority owned restaurants near you!" />
        <Container>
          <PageTitle>Restaurants</PageTitle>
        </Container>
      </Layout>
    )
}
