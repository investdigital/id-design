#react-table
***
#####A simple custom table component

#Usage
````
 import React, {Component} from 'react';
 import  ReactDOM from 'react-dom';
 import {Table} from 'nl-design';
 
 class App extends Component{
     constructor(){
         super();
     }
     render(){
         const columns = [{
             title: 'Name',
             key: 'name',
             headerStyle: { fontSize: '20px' },
             headerProps: { className: 'text-center' },
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
         return(
             <div style={{width:'960px',margin:'auto'}}>
                 <Table columns={columns} dataSource={data}  />
             </div>
         );
     }
 }
 ReactDOM.render(<App />, document.getElementById('app'));
````