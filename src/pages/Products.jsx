import React from 'react'
import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts'
import Badge from '../components/badge/Badge'
import Table from '../components/table/Table'
import products from '../assets/JsonData/products-list.json'




const renderHead = (item, index) => (
    <th key={index}>
        {item}  <button><i className='bx bx-down-arrow'></i></button>
    </th>
)

const chartOptions = {
    series: [{
        data: [44, 55, 41, 64]
    }, {
        data: [53, 32, 33, 52]
    }],
    options: {
        chart: {
            type: 'bar',
            background: 'transparent',
            height: 530
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Iphone 11', 'Iphone 11 pro max', 'Iphone 12', 'Iphone 12 pro max'],
        },
    },
}

const bestProducts = {
    header: [
        "product id",
        "product name",
        "sale",
        "total order",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            product_name: "Iphone 12",
            total_order: "17",
            sale: "10%",
            status: "sold out"
        },
        {
            id: "#OD1712",
            product_name: "Iphone 11",
            total_order: "36",
            sale: "10%",
            status: "in stock"
        },
        {
            id: "#OD1713",
            product_name: "Iphone X",
            total_order: "27",
            sale: "$200",
            status: "ordering"
        },
        {
            id: "#OD1714",
            product_name: "Iphone XS",
            total_order: "27",
            sale: "$200",
            status: "ordering"
        },
        {
            id: "#OD1715",
            product_name: "Iphone Pro Max",
            total_order: "27",
            sale: "$200",
            status: "in stock"
        }
    ]
}
const productStatus = {
    "ordering": "primary",
    "sold out": "warning",
    "in stock": "success"
}

const renderBestProducts = (item, index) => (
    <th key={index}>{item}</th>
)
const productHead = [
    "product id",
    "product name",
    "price",
    "status",
    "process"
]
const renderBodyBestProducts = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.product_name}</td>
        <td>{item.sale}</td>
        <td>{item.total_order}</td>
        <td>
            <Badge type={productStatus[item.status]} content={item.status} />
        </td>
    </tr>
)
const renderBodyProducts = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
        <td>
            <button className='btn-danger'><i className='bx bx-trash'></i></button>
            <button className='btn-success'>  <i className='bx bx-edit'></i> </button>
        </td>
    </tr>
)
const Products = () => {
    return (
        <div className='products'>
            <h2 className='page-header'>
                Products
            </h2>
            <div className='row'>
                <div className='col-6'>
                    <div className='card full-height'>
                        <div className='card__header'>
                            <h3>Top Products</h3>
                        </div>
                        <div className='card__body'>
                            {/** table */}
                            <Table headData={bestProducts.header}
                                renderHead={(item, index) => renderBestProducts(item, index)}
                                renderBody={(item, index) => renderBodyBestProducts(item, index)}
                                bodyData={bestProducts.body}
                            />
                        </div>
                        <div className='card__footer'>
                            <Link to='/'> View all</Link>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card full-height'>
                        <div className='card__header'>
                            <h3>Strong growth products </h3>
                        </div>
                        <div className='card__body'>
                            {/** table */}
                            <Chart options={chartOptions.options} series={chartOptions.series}
                                type='bar' height='100%'
                            />
                        </div>
                        <div className='card__footer'>
                            <Link to='/'> View all</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='card fix-height'>
                        <div className='card__header'>
                            <h3>Search product </h3>
                        </div>
                        <div className='card__body'>
                            <div className='form-search col-2'>

                                <div className='card__body'>
                                    <h4 className='card__header'>
                                        Tìm theo
                                    </h4>
                                    <ul>
                                        <li>mã sp</li>
                                        <li>tên sản phẩm</li>
                                        <li>đơn giá</li>
                                    </ul>
                                    <h4 className='card__header'>
                                        Sắp xếp
                                    </h4>
                                    <ul>
                                        <li>mã sp</li>
                                        <li>tên sản phẩm</li>
                                        <li>đơn giá</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                {Object.values(products).map((item, index) => {
                    var keys = Object.keys(products)
                    return < div className='col-12' >
                        <div className='card'>
                            <h4 className='card__header'>
                                {keys[index]}
                            </h4>
                            <div className='card__body'>
                                <Table
                                    limit='10'
                                    headData={productHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    renderBody={(item, index) => renderBodyProducts(item, index)}
                                    bodyData={item}
                                />
                            </div>
                        </div>
                    </div>

                })}

            </div>
        </div >
    )
}

export default Products
