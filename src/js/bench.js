import React from 'react';
import '../css/App.css';
import axios from 'axios';
import Nav from './components/Nav';
import Left from './components/Left';
import RightBench from './components/rightBench';


var instance = undefined;

const getInstance = () => {
  if (instance === undefined) {
    instance = axios.create({
      'baseURL' : 'http://www.mocky.io/v2',
      headers: { 'Content-Type': 'application/json' },
      'origin': '*',
      'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'preflightContinue': false,
      'withCredentials': true
    });
  }

  return instance;
};


export default class bench extends React.Component{
	constructor(){
		super();
		this.state = {
			bench: []
		}
	}
	handleHome = () => {
		// console.log('clicked');
		this.props.history.push('/');
	}

	componentWillMount(){
		console.log("BENCH mount");
		const getBench = () => {
			return getInstance().get('/5b4daf683100006e0b5ebd1a');
		}

		getBench().then((response) => {
			console.log('success', response.data.reply);
			this.setState({
				...this.state,
				bench: response.data.reply
			});

		}).catch((err) => {
			console.log('in catch');
			this.setState({
				...this.state,
				err: err
			})
		});
	}
	render(){
		return(
			<div className="App">
		      	<Nav />
		      	<div className="Bottom">
		      		<Left 
						handleHome={this.handleHome}
					/>
		      		
		      		<div className="main">
			      		<RightBench 
			      			bench={this.state.bench}
			      		/>
			      	</div>
		      	</div>
		    </div>
		);
	}
}