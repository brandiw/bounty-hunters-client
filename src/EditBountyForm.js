import React, { Component } from 'react'
import SERVER_URL from './constants/server'

class EditBountyForm extends Component {

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

	componentDidMount() {
		this.setState(this.props.current)
	}

	storeInput = (e) => {
		// update state to reflect user input
		let newState;
		if(e.target.name==='hunters') {
			newState = e.target.value.split(',')
		} else if(e.target.name==='captured') {
			newState = e.target.checked
		} else {
			newState = e.target.value
		}
		this.setState({
			[e.target.name]: newState
		})
	}

	updateBounty = (e) => {
		e.preventDefault()
		// console.log(this.state)
		fetch(SERVER_URL+'/'+this.props.current._id, {
			method: 'PUT',
			body: JSON.stringify(this.state), // data to send to server
			headers: {
				'Content-Type': 'application/json' // let the server know what's coming
			}
		})
		.then(response => response.json())
		.then(json => {
			console.log(json)
			this.props.toggleForm()
			this.props.changeCurrent({})
			this.props.rerender()
		})
		.catch(err => {
			console.log('Error posting data!', err)
		})
	}

	render() {
		const checkbox = this.state.captured ? <input type='checkbox' name='captured' onChange={this.storeInput} checked /> : <input type='checkbox' name='captured' onChange={this.storeInput}/>
		return(
			<form onSubmit={this.updateBounty}>
				<div className='form-control'>
					<label name="name">Name:</label>
					<input type="text" name="name" onChange={this.storeInput} value={this.state.name}/>
				</div>
				<div className='form-control'>
					<label name="wantedFor">Crime:</label>
					<input type="text" name="wantedFor" onChange={this.storeInput} value={this.state.wantedFor}/>
				</div>
				<div className='form-control'>
					<label name="client">Client:</label>
					<input type="text" name="client" onChange={this.storeInput} value={this.state.client}/>
				</div>
				<div className='form-control'>
					<label name="reward">Reward: $</label>
					<input type="number" name="reward" onChange={this.storeInput} value={this.state.reward}/>
				</div>
				<div className='form-control'>
					<label name="ship">Ship:</label>
					<input type="text" name="ship" onChange={this.storeInput} value={this.state.ship}/>
				</div>
				<div className='form-control'>
					<label name="hunters">Hunters:</label>
					<input type="text" name="hunters" onChange={this.storeInput} value={this.state.hunters.join(',')}/>
				</div>
				<div></div>
				<div className='form-control'>
					<label name='captured'>Captured:</label>
					{checkbox}
					<input type='submit' value='Update Bounty' />
				</div>
			</form>
		)
	}
}

export default EditBountyForm