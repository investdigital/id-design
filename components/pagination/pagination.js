import React, {Component} from 'react';
import './style/pagination.css'

class Pagination  extends Component{
    constructor(){
        super();
        this.state = {
            current : 1,
            value:''
        };
    }
    handleClick(current){
        this.setState({current : current});
        if(this.props.onChange){
            this.props.onChange(current);
        }
    }
    goNext(){
        let pageNow = this.state.current;
        if(pageNow < Math.ceil(this.props.total/this.props.defaultPageSize)){
            this.setState({current : pageNow + 1});
            if(this.props.onChange){
                this.props.onChange(pageNow+1);
            }
        }
    }
    goPrev(){
        let pageNow = this.state.current;
        if(pageNow > 1){
            this.setState({current : pageNow - 1});
            if(this.props.onChange){
                this.props.onChange(pageNow-1);
            }
        }
    }
    render(){
        let defaultPageSize=10;
        let totalData=0;
        if(this.props.defaultPageSize){
            defaultPageSize=this.props.defaultPageSize
        }
        if(this.props.total){
            totalData=this.props.total
        }
        let total = Math.ceil(totalData/defaultPageSize);
        let pageNow = this.state.current;
        let pageItems = [];
        let begin, pageLength, ellipsis;
        if(total <= 10){
            pageLength = total;
            begin = 1;
        }else{
            pageLength = 5;
            if(pageNow >= (total-2)){
                // 1..
                begin = total - 4;
                ellipsis = 1;

            }else if(pageNow <= 3){
                //..total
                begin = 1;
                ellipsis = 2;
            }else{
                begin = pageNow - 2;
                if(pageNow == 4){
                //    1    ..total
                    ellipsis=3;
                }else if(pageNow == (total-3)){
                    ellipsis = 5;
                }else{
                    ellipsis = 4;
                }
            }
        }
        for(let i = 0; i < pageLength; i ++){
            let pageNow = this.state.current;
            let showPage = begin + i;
            if(pageNow == showPage){
                pageItems.push({pageNum : showPage, active : true});
            }else{
                pageItems.push({pageNum : showPage, active : false});
            }
        }
        return (
            <div className="nl-pagination">
                <ul className="pagination-cols">
                    <li className="nl-pagination-item"><a className={this.state.current == 1? 'prev disable' : 'prev'} onClick={this.goPrev.bind(this)}></a></li>
                    {ellipsis == 1 || ellipsis == 4 || ellipsis == 5 ?
                        <ul className="nl-ellipsis">
                            <li className="nl-pagination-item"><a onClick={this.handleClick.bind(this, 1)}>1</a></li>
                            <li><a className="nl-pagination-ellipsis"></a></li>
                        </ul>

                        :''}
                    {ellipsis == 3 ? <li className="nl-pagination-item"><a onClick={this.handleClick.bind(this, 1)}>1</a></li>:''}
                    {
                        pageItems.map((item, index)=>{
                            return(
                                <li key={index} onClick={this.handleClick.bind(this, item.pageNum)} className={`nl-pagination-item ${item.active ? 'active' : ''}`}>
                                    <a>{item.pageNum}</a>
                                </li>
                            );
                        })
                    }
                    {ellipsis == 5 ? <li className="nl-pagination-item"><a onClick={this.handleClick.bind(this, total)}>{total}</a></li>:''}
                    {ellipsis == 3 || ellipsis == 4 || ellipsis == 2 ?
                        <ul className="nl-ellipsis">
                            <li><a className="nl-pagination-ellipsis"></a></li>
                            <li className="nl-pagination-item"><a onClick={this.handleClick.bind(this, total)}>{total}</a></li>
                        </ul>
                        :''}
                    <li className="nl-pagination-item"><a className={this.state.current == total || total==0 ? 'next disable' : 'next'} onClick={this.goNext.bind(this)}></a></li>
                </ul>

            </div>
        );
    }
}
export default Pagination;