import React, { Component } from 'react';



class SearchBar extends Component {
	constructor(props){
		super(props);
	
	// this should update to the value of the input
		this.state = { term: 'Starting Value' };
	}

	// use setState to change the state of and inform React the state changed

	render(){
		// return <input onChange = {(event) => this.setState({ term: event.target.value })} />;
		
		// If we set the value variable to a controller input, 
		return (
			<div className = "search-bar">
				<input 	
					value = {this.state.term}
					onChange = {(event) => this.onInputChange( event.target.value )} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;