import React from 'react';
import '../../css/bench/benchcr.css';

export default class benchRight extends React.Component{
	 
	 componentWillReceiveProps(nextProps) {
		  	// let updatedAt = nextProps.bench.map(val => { console.log('benchId', val.benchType)});
		    // console.log(nextProps);

		    // console.log("Right ComponentWillReceiveProps ", nextProps.activities);
		    // let json = JSON.stringify(nextProps);
		    // let obj = JSON.parse(json);
		}
	render(){
		return(
			<div>
				<div className="Bar">
	  				<div className="detailbar">
	            		<p className="accimg"><span className="glyphicon glyphicon-inbox"></span></p>
	  					<p className="acc"> Listing x bench </p>
		           </div>

  				</div>
  				 {
			          this.props.bench.map((row, idx) => (
			            <div className="Box" key={idx}>
			            		<p id="edit"> <span className="glyphicon glyphicon-pencil"></span> </p>
			            		<div>
				            		<p id="benchname">{row.benchId}</p>
				            		<p id="createdAt">{row.createdAt}</p>
				            	</div>
			            </div>
			          ))
			      }
			</div>
		);
	}
}