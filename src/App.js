import React, { Component } from 'react'

import Poster from './Poster'
import NewBountyForm from './NewBountyForm'
import ShowBounty from './ShowBounty'
import SERVER_URL from './constants/server'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bounties: [],
      current: {}
    }
  }

  componentDidMount() {
    this.getBounties()
  }

  getBounties = () => {
    fetch(SERVER_URL)
    .then(response => response.json())
    .then(json => {
      this.setState({ bounties: json })
    })
    .catch(err => {
      console.log('Derp', err)
    })
  }

  changeCurrent = (bounty) => {
    this.setState({ current: bounty })
  }

  render() {
    const moreInfo = <ShowBounty bounty={this.state.current} />
    const posters = this.state.bounties.map((bounty, i) => {
      return (
          <Poster
            key={i}
            bounty={bounty}
            changeCurrent={this.changeCurrent}
            currentId={this.state.current._id}
            rerender={this.getBounties}
          />
        )
    })

    return (
      <div className="App">
        <h1>WANTED</h1>
        <div>
          <h3>Wanted Poster Bulletin Board</h3>
          {posters}
        </div>
        <hr />
        {moreInfo}
        <NewBountyForm rerender={this.getBounties} />
      </div>
    );
  }
}

export default App












