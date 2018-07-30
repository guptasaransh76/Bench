import React from 'react';
import moment from 'moment';


export default class benchRight extends React.Component{
	
	  componentWillReceiveProps(nextProps) {
	  	// let updatedAt = nextProps.activities.map(val => { console.log('time', moment(val.timestamp).format('MMM Do YYYY, h:mm:ss a'))})
	   //  console.log("updatedAt",updatedAt);

	    // console.log("Right ComponentWillReceiveProps ", nextProps.activities);
	    // let json = JSON.stringify(nextProps);
	    // let obj = JSON.parse(json);

	  }

	render(){
		return(
			<div className="Right">
  			<div className="CentreBar">
  				<p className="activityimg"><span class="glyphicon glyphicon-list-alt"></span></p>
  				<p className="Activities">Account Activities</p>
  			</div>
  			<div>
  				
  			</div>
  		</div>
		);
	}
}
