import React from 'react';


export default class Left extends React.Component{

	// handleClick = () => {
	// 	console.log('bench clicked', this.context.history);
	// 	// const { history } = this.props;
	// 	// history.push("/bench");
	// 	this.context.history.push('/bench');

	// }
	render(){
		return(
			<div className="Left">
				<div id="container1" className="container text-center">
		  			<div style={{  "display": "flex"}} onClick={this.props.handleHome}>
		  				<p className="homegly"><span className="glyphicon glyphicon-home"></span></p>
		  				<a className="homeButton"> Home </a>
					</div>
				</div>
				<div id="container2" className="leftcontainer text-center">
		  			<div style={{  "display": "flex"}} onClick={this.props.handleClick}>
		  				<p className="homegly"><span className="glyphicon glyphicon-briefcase"></span></p>
		  				<a className="homeButton"> My bench </a>
					</div>
				</div>
				<div id="container3" className="leftcontainer text-center">
		  			<div style={{  "display": "flex"}}>
		  				<p className="homegly"><span className="glyphicon glyphicon-folder-open"></span></p>
		  				<a className="homeButton"> Shared with me </a>
					</div>
				</div>
			</div>
		);
	}
}