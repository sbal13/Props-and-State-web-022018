import React, { Component } from 'react';
import './App.css';
import paintingData from './data.js'
import PaintingDetails from './PaintingDetails'
import CommentList from './CommentList'

class App extends Component {
	render() {


		return (
			<div className="App">
				<PaintingDetails imageURL={paintingData.image_url} name={paintingData.name} artist={paintingData.artist} />
				<CommentList comments={paintingData.comments}/>
			</div>
		);
	}
}

export default App;
