import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		values: []
	};

	componentDidMount() {
		axios.get('http://localhost:5000/api/values').then((response) => {
			console.log(response.data);
			this.setState({
				values: response.data
			});
		});
	}

	render() {
		return (
			<div className="App">
				<Header as="h1" icon>
					<Icon name="users" />
					Reactivities
					<Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
				</Header>
				<header className="App-header">
					<List>
					{this.state.values.map((value: any) => 
            <List.Item key={value.id}> {value.name}</List.Item>)}
						
					</List>
					<ul />
				</header>
			</div>
		);
	}
}

export default App;
