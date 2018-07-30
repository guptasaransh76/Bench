import React from 'react';
import moment from 'moment';
import Table from '../../reactTable';	



export default class benchCenter extends React.Component{
  constructor(){
    super();
    this.state = {
      tablerows: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('benchCenter nextprops', nextProps);

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
            <p className="accimg"><span className="glyphicon glyphicon-th-large"></span></p>
  					<p className="acc"> Account Usage at {moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
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
	     </div>
		);
	}
}