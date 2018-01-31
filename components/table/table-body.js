import React, {Component} from 'react';

class TableBody extends Component{
    constructor(){
        super();
    }
    renderTh(){
        if(this.props.dataSource == null || this.props.dataSource == ''){
            return(
                <tr><td className="text-center" style={this.props.columns.dataStyle} {...(this.props.columns.dataProps || {})} colSpan={this.props.columns.length}>暂无数据</td></tr>
            );
        }
        return this.props.dataSource.map((item, index)=>{
            return(
                <tr key={index}>
                    {this.props.columns.map((val, index)=>{
                        let data=item[val.key];
                        if(val.render){
                            data = val.render(data, item);
                        }
                        return (
                            <td
                                key={index}
                                style={val.dataStyle}
                                {...(val.dataProps || {})} >
                                {data}
                            </td>
                        );
                    })}
                </tr>
            );
        });
    }
    render(){
        return(
            <tbody className="nl-table-tbody">
            {this.renderTh()}
            </tbody>
        );
    }
}
export default TableBody;