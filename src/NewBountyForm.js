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
			captured: false,
      error: ''
		}
	}

	storeInput = (e) => {
		// update state to reflect user input
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
			body: JSON.stringify(this.state), // data to send to server
			headers: {
				'Content-Type': 'application/json' // let the server know what's coming
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
      }, () => {
        this.props.rerender()
      })
		})
		.catch(err => {
			console.log('Error posting data!', err)
      this.setState({ error: 'Error posting data! Check your logs' })
		})
	}

	render() {
		return(
			<form onSubmit={this.postBounty}>
				<div className="form-control">
					<label name="name">Name:</label>
					<input type="text" name="name" onChange={this.storeInput} />
				</div>
				<div className="form-control">
					<label name="wantedFor">Crime:</label>
					<input type="text" name="wantedFor" onChange={this.storeInput} />
				</div>
				<div className="form-control">
					<label name="client">Client:</label>
					<input type="text" name="client" onChange={this.storeInput} />
				</div>
				<div className="form-control">
					<label name="reward">Reward: $</label>
					<input type="number" name="reward" onChange={this.storeInput} />
				</div>
				<div className="form-control">
					<label name="ship">Ship:</label>
					<input type="text" name="ship" onChange={this.storeInput} />
				</div>
				<div className="form-control">
					<label name="hunters">Hunters:</label>
					<input type="text" name="hunters" onChange={this.storeInput} />
				</div>
				<div></div>
				<div className="form-control">
					<label name="captured">Captured:</label>
					<input type="checkbox" name="captured" onChange={this.storeInput} />
					<input type="submit" value="Add New Bounty" />
				</div>
			</form>
		)
	}
}

export default NewBountyForm
