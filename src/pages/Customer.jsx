import React from 'react'
import Table from '../components/table/Table'
import customerList from '../assets/JsonData/customer-list.json'




const customerHead = [
    '',
    'name',
    'email',
    'phone',
    'total-orders',
    'total-spend',
    'location'
]

const renderHead =(item,index)=>(
    <th key={index}>
        {item}
    </th>
)
const renderBody =(item,index)=>(
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)
const Customer = () => {
    return (
        <div className='customer'>
           <h2 className='page-header'>
               Customers
           </h2>
           <div className='row'>
               <div className='col-12'>
                   <div className='card'>
                       <div className='card__body'>
                           <Table 
                           limit='10'
                           headData={customerHead}
                           renderHead={(item,index)=>renderHead(item,index)}
                           renderBody={(item,index)=>renderBody(item,index)}
                           bodyData={customerList}
                           />
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Customer
