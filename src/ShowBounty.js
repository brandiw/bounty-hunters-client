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
		fetch(SERVER_URL+'/'+this.props.match.params.id)
		.then(response=>response.json())
		.then(json=>{
			console.log(json)
			this.setState({bounty: json})
		})
		.catch(err=>{
			console.log('Error fetching details:', err)
		})
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
			</div>
		)
	}
}

export default ShowBounty








