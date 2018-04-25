import React from 'react'

class NewCommentForm extends React.Component {

	state = {
		name: "",
		text: ""
	}
	
	handleSubmit = event => {
		event.preventDefault()
		this.props.addComment(this.state.name, this.state.text)
		this.setState({
			name: "",
			text: ""
		})
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.handleChange}/>
				<input type="text" name="text" placeholder="What do you wanna say?" value={this.state.text} onChange={this.handleChange}/>
				<input type="submit"/>
			</form>
		)
	}
}

export default NewCommentForm