import React, { Component } from 'react'
import './App.css'
// bring in server url from constants folder
import SERVER_URL from './constants/server'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


// import components to render inside App
import Poster from './Poster'
import NewBountyForm from './NewBountyForm'
import ShowBounty from './ShowBounty'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bounties: []
    }
  }

  // API calls go here
  // runs just after render()
  componentDidMount() {
    this.getBounties()
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
      console.log("Error fetching bounties!", err)
    })   
  }

  render() {
    const posters = this.state.bounties.map((bounty, i)=>{
      return <Poster bounty={bounty} key={i} rerender={this.getBounties} />
    })
    return (
      <Router>
        <div className="App">
          <h1>WANTED</h1>
          <Route exact path='/:id' component={ShowBounty}/>
          {posters}
          <NewBountyForm rerender={this.getBounties}/>
        </div>
      </Router>
    );
  }
}

export default App;












