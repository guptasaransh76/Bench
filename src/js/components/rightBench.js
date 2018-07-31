import React from 'react';
import moment from 'moment';
import '../../css/bench/benchcr.css';
import BenchCentre from './bench/benchCenter';
import BenchActivities from './bench/benchActivities';

export default class benchRight extends React.Component{
	constructor(){
		super();
		this.state = {
			run: []
		}
	}
	 
	 componentWillReceiveProps(nextProps) {
		  	// let updatedAt = nextProps.bench.map((val) => { 
		  	// 	let t = moment(val.createdAt).fromNow();
		  	// 	console.log('time', t);
		  	// });
		    // console.log(nextProps);
			this.setState({
				...this.state,
				run: nextProps.runtime
			});
		}
	render(){
		return(
			<div>
  				 {!this.props.isBench &&
			          this.props.bench.map((row, idx) => (
			            <div className="Box" key={idx} onClick={this.props.clickHandler}>
			            		<p id="edit"> <span className="glyphicon glyphicon-pencil"></span> </p>
			            		<div>
				            		<p id="benchname">{row.benchId}</p>
				            		<div className="sub">
				            			<p id="lang">BBLANG</p>
				            			<p id="createdAt">{moment(row.createdAt).fromNow()}</p>
				            		</div>
				            	</div>
			            </div>
			          ))
			      }
			      {
			      	this.props.isBench &&
			      		<div style={{"display": "flex"}}>
			      			<BenchCentre 
			      				run={this.state.run}
			      			/>

			      			<BenchActivities />
			      		</div>
			      }
			</div>
		);
	}
}