import React from "react";
import $, {DataTable} from 'jquery';

// import "../css/bankTable.css";

export default class Viewbanks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      table: props.results
    };
  }

  componentWillMount(){
    console.log('componentwillmount');
    let rows = [
      {
        bank_id: 1,
        bank_name: 'abc',
        branch: '12'
      },
      {
        bank_id: 2,
        bank_name: 'def',
        branch: '34'
      },
      {
        bank_id: 3,
        bank_name: 'ghi',
        branch: '56'
      }
    ]
    
    $('#myTable').DataTable();
    
    this.setState({
      ...this.state,
      rows: rows
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log("Viewbanks ComponentWillReceiveProps", nextProps);

    this.setState({
      ...this.state,
      table: nextProps.results
    });
  }

  
  renderTableBody(rows) {
    return rows.map(
      (row, i) => {
        return (
          <tr key={"viewbank" + i}>
            <th scope="row">{i + 1}</th>
            <td>{row.bank_id}</td>
            <td>{row.bank_name}</td>
            <td>{row.branch}</td>
          </tr>
        );
      });
  }

  render() {

    return (
      <div>

          <table id="myTable" className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Handler</th>
                <th>Bench</th>
                <th>Hit Count</th>
                <th>Avg. Network Time</th>
              </tr>
            </thead>

            <tbody>
              {this.renderTableBody(this.state.rows)}
            </tbody>

          </table>
        
      </div>
    );

  }
}