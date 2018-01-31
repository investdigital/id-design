import React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import {Table, Pagination} from 'nl-design';
// import Table from '../components/table/table';
// import Pagination from '../components/pagination/pagination'

class App extends Component{
    constructor(){
        super();
        this.state = {
            // currentIndex : 0
        };
    }
    delete(id){
        console.log(id);
    }
    render(){
        const columns = [{
            title: 'Name',
            key: 'name',
            headerStyle: { fontSize: '20px' },
            headerProps: { className: 'text-center' },
            dataStyle: { fontSize: '15px'},
            dataProps: { className: 'text-center' },
            render: (id) => {
                return <a href={'user/'+id}>{id}</a>;
            }
        }, {
            title: 'Age',
            key: 'age',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
        }, {
            title: 'Address',
            key: 'address',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
        }, {
            title: 'Action',
            key: 'action',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left text-center'},
            render: (id, data) => {
                return(
                    <span>
                        <a onClick={this.delete.bind(this, data.name)}>删除</a>
                        <span className="ant-divider" />
                        <a href="#">详情</a>
                        <span className="ant-divider" />
                    </span>
                );
            },
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        const style = {
            tableStyle: { fontSize: '12px'},
            tableProps: { className: ''},
        };
        const data1=1;
        return(
            <div style={{width:"960px",margin:"auto"}}>
                <Table columns={columns} dataSource={data} tableStyle={style.tableStyle} tableClass={style.tableProps} />
                <Pagination defaultPageSize={8} total = {data1} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));