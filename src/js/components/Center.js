import React from 'react';
import moment from 'moment';
import Table from '../reactTable';	



export default class Center extends React.Component{
  constructor(){
    super();
    this.state = {
      tablerows: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Center nextprops', nextProps);

    this.setState({
      ...this.state,
      tablerows: nextProps.results
    });
  }
	render(){
		return(
			<div className="Centre">
  			<div className="CentreBar">
  				<div className="detailbar">
  					<p className="acc"> Account Usage at {moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
  					<div className="dropbutton">
					<select id="inputState" className="btn btn-dafault form-control " placeholder="Filter" onChange={this.selectHandler}>
			                  <option value="today">Today</option>
	                  <option value="week">Last 7 days</option>
	                  <option value="month">This Month</option>
	                  <option value="custom">Custom</option>
	               	</select>
	            </div>
  				</div>
  			</div>
  			<div className="Count">
  				<div className="invocation">
  					<div className="namebar">
  						<p className="imgconfig"> <span className="glyphicon glyphicon-floppy-disk"></span></p>
  						<p className="nameCount">Invocation Count</p>
  					</div>
  					<div className="displaybar">
  						<p className="displayValue"> {this.props.memory === '' ? 0 : this.props.memory} </p>
  					</div>
  					<div className="bar">
  						<div className="progress barProgress">
					  <div className="progress-bar" role="progressbar" aria-valuenow="70"
					  aria-valuemin="0" aria-valuemax="100" style={{"width":"40%"}}>
					    <span className="sr-only">70% Complete</span>
					  </div>
					</div>
  					</div>
  				</div>
  				<div className="memory">
  					<div className="namebar">
  						<div className="namebar">
  							<p className="imgconfig"> <span className="glyphicon glyphicon-floppy-disk"></span></p>
  							<p className="nameCount">Memory Usage</p>
  						</div>
  					</div>
  					<div className="displaybar">
  						<p className="displayMem"> {this.props.invocation === '' ? 0 : this.props.invocation}Bytes</p>
  					</div>
  					<div className="bar">
  						<div className="progress barProgress">
					  <div className="progress-bar" role="progressbar" aria-valuenow="70"
					  aria-valuemin="0" aria-valuemax="100" style={{"width":"40%"}}>
					    <span className="sr-only">70% Complete</span>
					  </div>
					</div>
  					</div>
  				</div>
	      	</div>
	      	<div className="request">
  				<div className="requestname">
  					<p>Passed Request</p>
  					<Table 
              results={this.state.tablerows}
            />
  				</div>

  			</div>
  			<div className="request">
  				<div className="requestname">
  					<p>Failed Request</p>
  					<Table />
  				</div>
  			</div>
	     </div>
		);
	}
}