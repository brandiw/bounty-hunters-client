import React, {Component} from 'react'
import SERVER_URL from './constants/server'

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
		const more = (<button onClick={()=>this.props.changeCurrent(this.props.bounty)}>More</button>)
		const less = (<button onClick={()=>this.props.changeCurrent({})}>Less</button>)
		const button = this.props.current===this.props.bounty?less:more
		return (
			<div className="poster">
				<h3>{this.props.bounty.name}</h3>
				<h4>${this.props.bounty.reward}</h4>
				{button}
{/*				<Link to={`/${this.props.bounty._id}`}>More</Link>
*/}				<button onClick={this.deleteBounty}>Delete</button>
			</div>
		)
	}
}

export default Poster







