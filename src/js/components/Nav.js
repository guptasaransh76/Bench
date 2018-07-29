import React from 'react';


export default class Nav extends React.Component{
	render(){
		return(
			<div className="Nav">
	      		<div className="NavLeft">
	      			<div className="imageDisplay">
	      				<button className="ButtonOut"> </button>
	      			</div>
	      			<div className="nameDisplay">
	      				<p> backbench </p>
	      			</div>
	      		</div>
	      		<div className="NavRight"> 
	      			<p className="homeimg"><span className="glyphicon glyphicon-home"></span></p>
	      			<p className="homename"> Home </p>
	      		</div>
	      	</div>
		);
	}
}