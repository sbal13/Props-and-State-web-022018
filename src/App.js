import React, { Component } from 'react';
import './App.css';
import paintingData from './data.js'
import PaintingDetails from './PaintingDetails'
import CommentList from './CommentList'
import NewCommentForm from './NewCommentForm'

class App extends Component {
	state = {
		comments: paintingData.comments
	}

	addComment = (author, text) => {
		this.setState({
			comments: [...this.state.comments, {author, text}]
		})
	}

	deleteComment = (comment) => {
		let index = this.state.comments.indexOf(comment)

		this.setState({
			comments: [...this.state.comments.slice(0,index), ...this.state.comments.slice(index+1)]
		})
	}




	render() {
		return (
			<div className="App">
				<PaintingDetails imageURL={paintingData.image_url} name={paintingData.name} artist={paintingData.artist} />
				<CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
				<NewCommentForm addComment={this.addComment} />
			</div>
		);
	}
}

export default App;
