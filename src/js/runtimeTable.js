import React from 'react';
import Reactable from 'reactable'; 
import $ from 'jquery';
import '../css/paginator.css';

var Table = Reactable.Table,  
    Thead = Reactable.Thead,
    Th = Reactable.Th;


export default class runtimeTable extends React.Component{
  constructor(){
    super();
    this.state = {
      rows: []
    }

  }

  componentWillMount(){
    // console.log('hello');

     //  let rows = [
    //  {"benchId":"autom","handler":"health10x","total":4,"avgNetworkTime":768.75,"status":"ok"},
    //  {"benchId":"autom","handler":"env","total":1,"avgNetworkTime":809,"status":"ok"},
    //  {"benchId":"autom","handler":"main","total":13,"avgNetworkTime":105783.7692,"status":"ok"},
    //  {"benchId":"autom","handler":"health_graph","total":6,"avgNetworkTime":1179.1667,"status":"ok"},
    //  {"benchId":"autom","handler":"worker10x","total":311,"avgNetworkTime":4459.9711,"status":"ok"},
    //  {"benchId":"autom","handler":"wrapMocker","total":134,"avgNetworkTime":1862.8358,"status":"ok"},
    //  {"benchId":"autom","handler":"better","total":14,"avgNetworkTime":1204.8571,"status":"ok"},
    //  {"benchId":"autom","handler":"ga_response_time","total":9,"avgNetworkTime":1192.1111,"status":"ok"}
    // ]
        
    // this.setState({
    //   ...this.state,
    //   rows: rows
    // })

  }

  componentWillReceiveProps(nextProps) {
    // console.log('RunTimeTable - component will receive props');
    console.log('nextprops', nextProps);

    nextProps.results.map((val,ind) => {
      console.log('val', val);
    });

    this.setState({
      ...this.state,
      rows: nextProps.results
    });
  }

  componentDidMount(){
    $('tbody.reactable-pagination tr td').addClass('custom-pagination');
    let con = $('tbody.reactable-pagination tr td');

  }

renderTableBody(rows) {
    return rows.map(
      (row, i) => {
        return (
          <tr key={"viewbank" + i}>
            <th scope="row">{row.status}</th>
            <td>{row.timestamp}</td>
            <td>{row.handler}</td>
            <td>{row.duration}</td>
            <td>{console.log(row.log)}</td>
          </tr>
        );
      });
  }

renderTable() {
    return (
      <Table className="table table-striped"
        noDataText="No matching records found"
        itemsPerPage={4}
        currentPage={0}
        data={this.state.rows}
        pageButtonLimit={5}>

        <Thead>
          <Th column="handler">Status</Th>
          <Th column="benchId">Time</Th>
          <Th column="Time">Handler</Th>
          <Th column="total">Duration</Th>
          <Th column="avgNetworkTime">Log</Th>
        </Thead>
        
      </Table>
    )
  }
  

  render(){
    return(
      <div className="tableStyle">
        {this.renderTable()}
      </div>
    );
  }
  
}
