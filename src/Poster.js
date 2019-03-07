import React, {Component} from 'react'
import SERVER_URL from './constants/server'

class Poster extends Component {
	deleteBounty = () => {
    console.log('TODO: Delete Bounty')
	}

	render() {
		const more = (<button onClick={() => this.props.changeCurrent(this.props.bounty)}>More</button>)
		const less = (<button onClick={() => this.props.changeCurrent({})}>Less</button>)
		const button = this.props.current === this.props.bounty ? less : more

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







