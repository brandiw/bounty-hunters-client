import React, {Component} from 'react'
import SERVER_URL from './constants/server'

class Poster extends Component {
	deleteBounty = () => {
    fetch(`${SERVER_URL}/${this.props.bounty._id}`, {
      method: 'DELETE'
    })
    .then(response => {
      return response.status === 204 ? {} : response.json()
    })
    .then(json => {
      // RERENDER!
      this.props.rerender()
    })
    .catch(err => {
      console.log('Derp', err)
    })
	}

	render() {
    const more = <button onClick={ () => this.props.changeCurrent(this.props.bounty) }>More</button>
    const less = <button onClick={ () => this.props.changeCurrent({}) }>Less</button>
		const button = this.props.bounty._id === this.props.currentId ? less : more

    return (
			<div className="poster">
				<h3>{this.props.bounty.name}</h3>
				<h4>${this.props.bounty.reward}</h4>
				{button}
        <button onClick={this.deleteBounty}>Delete</button>
			</div>
		)
	}
}

export default Poster







