import React, { Component } from 'react'

export default class DataMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <form>
          <label>
            Search by cuisine:
          </label>
          <input value={this.state.value} onChange={this.props.onSearchChange} type="text"></input>
        </form>
      </div>


    )
  }
}
