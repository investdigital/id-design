import React, {Component} from 'react';

class TableHeader extends Component{
    constructor(){
        super();
    }
    renderTh(){
        return this.props.columns.map((item, index)=>{
            return(
                <th style={item.headerStyle} {...item.headerProps} key={index}>
                    <span>{item.title}</span>
                </th>
            );
        });
    }
    render(){
        return(
            <thead className="nl-table-thead">
            <tr>
                {this.renderTh()}
            </tr>
            </thead>
        );
    }
}
export default TableHeader;