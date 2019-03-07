import React, { Component } from 'react'
import SERVER_URL from './constants/server'

class NewBountyForm extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			wantedFor: '',
			client: '',
			reward: 0,
			ship: '',
			hunters: [],
			captured: false
		}
	}

	handleInput = (e) => {
		let newState;
		if(e.target.name === 'hunters') {
			newState = e.target.value.split(',')
		}
    else if(e.target.name === 'captured') {
			newState = e.target.checked
		}
    else {
			newState = e.target.value
		}
		this.setState({
			[e.target.name]: newState
		})
	}

	postBounty = (e) => {
		e.preventDefault()
    fetch(SERVER_URL, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        name: '',
        wantedFor: '',
        client: '',
        reward: 0,
        ship: '',
        hunters: [],
        captured: false
    }, this.props.rerender)
	})
}

	render() {
		return(
      <div>
        <hr />
        <h2>Is Crime Plaguing Your Neighborhood?</h2>
        <p>Bring the galaxy's finest hunters onto your team!</p>
  			<form onSubmit={this.postBounty}>
  				<div className="form-control">
  					<label name="name">Name:</label>
  					<input type="text" name="name" onChange={this.handleInput} value={this.state.name} />
  				</div>
  				<div className="form-control">
  					<label name="wantedFor">Crime:</label>
  					<input type="text" name="wantedFor" onChange={this.handleInput} value={this.state.wantedFor} />
  				</div>
  				<div className="form-control">
  					<label name="client">Client:</label>
  					<input type="text" name="client" onChange={this.handleInput} value={this.state.client} />
  				</div>
  				<div className="form-control">
  					<label name="reward">Reward: $</label>
  					<input type="number" name="reward" onChange={this.handleInput} value={this.state.reward} />
  				</div>
  				<div className="form-control">
  					<label name="ship">Ship:</label>
  					<input type="text" name="ship" onChange={this.handleInput} value={this.state.ship} />
  				</div>
  				<div className="form-control">
  					<label name="hunters">Hunters:</label>
  					<input type="text" name="hunters" onChange={this.handleInput} value={this.state.hunters} />
  				</div>
  				<div></div>
  				<div className="form-control">
  					<label name="captured">Captured:</label>
  					<input type="checkbox" name="captured" onChange={this.handleInput} value={this.state.captured} />
  					<input type="submit" value="Add New Bounty" />
  				</div>
  			</form>
      </div>
		)
	}
}

export default NewBountyForm
