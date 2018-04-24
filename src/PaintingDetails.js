import React from 'react'

class PaintingDetails extends React.Component {

	state = {
		liked: false,
	}

	likePainting = (event) => {
		this.setState({
			liked: !this.state.liked
		})

		// this.state.liked = !this.state.liked
	}

	render(){
		return (
			<div>
				<h3>{this.props.name}</h3>
				<h5>By: {this.props.artist}</h5>
				<img className={(this.state.liked ? "liked-" : "") + "painting"} src={this.props.imageURL} />
				<button onClick={this.likePainting} >Like</button>
			</div>
		)
	}
}

export default PaintingDetails
