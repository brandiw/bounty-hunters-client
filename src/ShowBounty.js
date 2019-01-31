import React, { Component } from 'react'
import SERVER_URL from './constants/server'

class ShowBounty extends Component {

	constructor() {
		super()
		this.state = {
			bounty: {
				hunters: []
			}
		}
	}

	componentDidMount() {
		this.setState({bounty: this.props.bounty})
	}

	render(){
		const status = this.state.bounty.captured?'CAUGHT':'AT LARGE'
		return(
			<div className='show-bounty'>
				<h2>{this.state.bounty.name}</h2>
				<h3>${this.state.bounty.reward}</h3>
				<h4>Crime: {this.state.bounty.wantedFor}</h4>
				<h4>Ship: {this.state.bounty.ship}</h4>
				<h4>Hunters:</h4>
				{this.state.bounty.hunters.join(', ')}
				<h4>{status}</h4>
				<button onClick={this.props.toggleForm}>Edit</button>
			</div>
		)
	}
}

export default ShowBounty








