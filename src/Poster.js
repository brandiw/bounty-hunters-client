import React, {Component} from 'react'
import SERVER_URL from './constants/server'

class Poster extends Component {
	deleteBounty = () => {
    console.log('TODO: Delete Bounty')
	}

	render() {
		const button = <button>Less/More</button>

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







