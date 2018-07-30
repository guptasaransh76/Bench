import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './css/index.css';
import App from './js/App';
import Bench from './js/bench';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/bench" component={Bench} />
		</Switch>
	</BrowserRouter>, document.getElementById('root'));
