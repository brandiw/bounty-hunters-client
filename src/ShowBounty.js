import React, { Component } from 'react'

class ShowBounty extends Component {
  render(){
    let display = <h3>Crime is on the rise!</h3>
    if(this.props.bounty && this.props.bounty.name){
      display = (
          <div className="show-bounty">
            <h2>{this.props.bounty.name}: ${this.props.bounty.reward}</h2>
            <h4>Wanted For: {this.props.bounty.wantedFor}</h4>
            <p>
              Last seen on the <strong>{this.props.bounty.ship}</strong>
            </p>
            <p>
              Hunted by: {(this.props.bounty.hunters || []).join(', ')} for {this.props.bounty.client}
            </p>
            <h4>STATUS: {this.props.bounty.captured ? 'CAUGHT' : 'AT LARGE'}</h4>
          </div>
        )
    }

		return(
      <div>
			 {display}
      </div>
		)
	}
}

export default ShowBounty








