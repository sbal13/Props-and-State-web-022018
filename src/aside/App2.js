import React, { Component } from 'react';

import {Donalds, PhilA, Dees} from './restaurants'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Donalds />
				<PhilA />
				<Dees />
			</div>
		);
	}
}

export default App;
