import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Image } from 'react-bootstrap';
export default function product({data}) {
    const [records,setRecords] =useState(data);
    function handleClick(event){
        const newData = data.filter(row=>{
           
            return row.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData);
    };
    const ImageCell = ({data}) => <img src={data.image} width="50" height="50" thumbnail />;
    const columns =[
        {
            name: 'ID',
            selector:row =>row.id,
        },
        {
            name: 'Name',
            selector: row =>row.title,
        },
        {
            name: 'Price',
            selector: row =>row.price,
        },
        {
            name: 'Category',
            selector: row =>row.category,
        },
        {
            name: 'Image',
            selector: row => <img src={row.image} width="50" height="50" thumbnail />,
        
        },

    ];
    return (
    <div className='container h-50'>
      <input class="form-control me-2 w-25 float-end" type='text' onChange={handleClick} ></input>
      <DataTable
            columns={columns}
            data={data}
            fixedHeader
		    pagination
		    dense
        />
    </div>
  )
}
export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  }