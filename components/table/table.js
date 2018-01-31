import React, {Component} from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';
import './style/table.css';

class Table extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <table className={`table nl-table table-hover table-striped table-round ${this.props.tableClass.className}`} style={this.props.tableStyle}>
                    <TableHeader columns={this.props.columns}/>
                    <TableBody dataSource={this.props.dataSource} columns={this.props.columns}/>
                </table>
            </div>

        );
    }
}
export default Table;