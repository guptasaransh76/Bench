import React from 'react';


export default class Left extends React.Component{
	render(){
		return(
			<div className="Left">
				<div id="container" className="container text-center" onMouseOver={this.props.handleColorChange} onMouseOut={this.props.handleOut}>
	  			<div style={{  "display": "flex"}}>
	  				<p className="homegly"><span className="glyphicon glyphicon-home"></span></p>
	  				<a className="homeButton"> Home </a>
					</div>
				</div>
				<div id="container" className="container text-center" onMouseOver={this.props.handleColorChange} onMouseOut={this.props.handleOut}>
	  			<div style={{  "display": "flex"}}>
	  				<p className="homegly"><span className="glyphicon glyphicon-home"></span></p>
	  				<a className="homeButton"> Home </a>
					</div>
				</div>
			</div>
		);
	}
}