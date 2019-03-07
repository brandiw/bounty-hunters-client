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
		this.setState({ bounty: this.props.bounty })
	}

	render(){
		const status = this.state.bounty.captured?'CAUGHT':'AT LARGE'
		return(
			<div className='show-bounty'>
				<h2>{this.state.bounty.name}: ${this.state.bounty.reward}</h2>
				<h4>Wanted For: {this.state.bounty.wantedFor}</h4>
				<p>
          Last seen on the <strong>{this.state.bounty.ship}</strong>
        </p>
				<p>
          Hunted by: {this.state.bounty.hunters.join(', ')} for {this.state.bounty.client}
        </p>
				<h4>STATUS: {status}</h4>
			</div>
		)
	}
}

export default ShowBounty








