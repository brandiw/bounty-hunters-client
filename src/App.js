import React, { Component } from 'react'
import './App.css'
// bring in server url from constants folder
import SERVER_URL from './constants/server'

// import components to render inside App
import Poster from './Poster'
import NewBountyForm from './NewBountyForm'
import ShowBounty from './ShowBounty'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bounties: [],
      current: {}
    }
  }

  // API calls go here
  // runs just after render()
  componentDidMount() {
    this.getBounties()
  }

  changeCurrent = (obj) => {
    this.setState({current: obj})
  }

  getBounties = () => {
    fetch(SERVER_URL)
    .then(response=> {
      // fetch returns a fetch object, not JUST the data
      return response.json() // extract json from fetch object
    })
    .then(json=>{
      console.log(json)
      this.setState({bounties: json})
    })
    .catch(err=>{
      console.log('Error fetching bounties!', err)
    })
  }

  render() {
    const posters = this.state.bounties.map((bounty, i) => {
      return <Poster
        bounty={bounty}
        key={i}
        rerender={this.getBounties}
        changeCurrent={this.changeCurrent}
        current={this.state.current}
      />
    })
    const more = this.state.current._id ?
      <ShowBounty
        bounty={this.state.current}
        key={this.state.current._id}
      /> :
      <h3>Crime is on the rise!</h3>
    return (
      <div className="App">
        <h1>WANTED</h1>
        {posters}
        {more}
        <NewBountyForm rerender={this.getBounties} />
      </div>
    );
  }
}

export default App;












