import React, { Component } from 'react'
import styled from '@emotion/styled'
import PageTitle from '../PageTitle'

const Search = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Container = styled.div `
 max-width: ${props => props.theme.sizes.maxWidth};

`
const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  ${'' /* display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start; */}
  input,
  textarea {
    font-family: inherit;
    font-size: 12px;
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.text};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

export default class DataMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
       <PageTitle>Austin Restaurants</PageTitle>
        <Form
          value={this.state.value}
          onChange={this.props.onSearchChange}
          type="text"
        >
          <Search name="name" type="text" placeholder="Search by cuisine" />
        </Form>
      </Container>
    )
  }
}
