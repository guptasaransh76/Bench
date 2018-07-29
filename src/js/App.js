import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import Nav from './components/Nav';
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';

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


class App extends Component {
	constructor(){
		super();
		this.state = {
			memory: '',
			invocation: '',
			activities: [],
			results: []
		}
	}

	handleColorChange = (e) => {
		// console.log('e', e.target.style);
		document.querySelector("#container").style.background = "#bfbfbf";
	}
	handleOut = (e) => {
		// console.log('e', e.target.style);
		document.querySelector("#container").style.background = "#e3eaef";
	}

	selectHandler = (e) => {
		// console.log('selected', e.target.value);
		let selected = e.target.value;
	}
	componentWillMount(){
		console.log('mount');
		const getMemory = () => {
	      return getInstance().get('/5b4dad7c31000055005ebd04');
	    };

	    const getInvocation = () => {
	    	return getInstance().get('/5b4dadc831000013115ebd05');
	    }

	    const getActivities = () => {
	    	return getInstance().get('/5b4daf3431000055005ebd18');
	    }

	    const getRequests = () => {
	    	return getInstance().get('/5b4dae7431000013115ebd12');
	    }

	    getMemory()
	      .then((response) => {
	        // console.log('in get Memory');

	          this.setState({
	            ...this.state,
	            memory: response.data.memory,
	          });
	          
	          // console.log('Memory', this.state.memory);
	      })
	      .catch((err) => {
	        console.log('in catch');
	        this.setState({
	          ...this.state,
	          results: ''
	        });
      });

      getInvocation()
      .then((response) => {
        // console.log('in get Invocation');
          this.setState({
            ...this.state,
            invocation: response.data.invocations,
          });
       })
      .catch((err) => {
        console.log('in catch');
        this.setState({
          ...this.state,
          results: ''
        });
      });

      getActivities()
	      .then((response) => {
	        // console.log('in get Activities');
	          this.setState({
	            ...this.state,
	            activities: response.data.reply,
	          });
	          
	          // console.log('state', this.state);
	      })
	      .catch((err) => {
	        console.log('in catch');
	        this.setState({
	          ...this.state,
	          results: ''
	        });
      });

	  getRequests()
	      .then((response) => {
	        console.log('in get getRequests');

	        console.log('success', response.data.reply);

	          this.setState({
	            ...this.state,
	            results: response.data.reply,
	          });
	          
	          console.log('results', this.state.results);
	      })
	      .catch((err) => {
	        console.log('in catch');
	        this.setState({
	          ...this.state,
	          results: ''
	        });
      });


	}

  render() {

    return (
      <div className="App">
      	<Nav />
      	
      	<div className="Bottom">
      		<Left 
      			handleColorChange={this.handleColorChange}
      			handleOut={this.handleOut}
      		/>

      		<div className="main">
	      		<Center 
	      			memory={this.state.memory}
	      			invocation={this.state.invocation}
	      			results={this.state.results}

	      		/>
	      		
	      		<Right 
	      			activities={this.state.activities}
	      		/>
	      	</div>
      	</div>
      </div>
    );
  }
}

export default App;
