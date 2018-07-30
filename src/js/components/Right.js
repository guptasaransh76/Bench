import React from 'react';
import moment from 'moment';


export default class Left extends React.Component{
	
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
  				<h6></h6>
  				{
		          this.props.activities.map((row, idx) => (
		            <div className="rightBox" key={idx}>
		            	<div className="activityTitle">
			            	<p id="objectname">{`Object Name: ${row.objectName}`}</p>
			            	<p id="updatedAt">{moment(row.timestamp).format('MMMM Do, h:mm:ss a')}</p>
		            	</div>
		              <p id="str">{`${row.authId} ${row.action} ${row.benchName}. The language used was ${row.lang}.`}</p>
		            </div>
		          ))
		        }
  			</div>
  		</div>
		);
	}
}
