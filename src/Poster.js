import React, {Component} from 'react'
import SERVER_URL from './constants/server'
import { Link } from 'react-router-dom'

class Poster extends Component {

	deleteBounty = () => {
		fetch(SERVER_URL+'/'+this.props.bounty._id, {
			method: 'DELETE'
		})
		.then(response=>{
			let responseJSON = response.status===204 ? {} : response.json()
			return	responseJSON
		})
		.then(json=>{
			this.props.rerender()
		})
		.catch(err=>{
			console.log("Error deleting bounty!", err)
		})
	}
	
	render() {
		return (
			<div className="poster">
				<h3>{this.props.bounty.name}</h3>
				<h4>${this.props.bounty.reward}</h4>
				<Link to={`/${this.props.bounty._id}`}>More</Link>
				<button onClick={this.deleteBounty}>Delete</button>
			</div>
		)
	}
}

export default Poster







