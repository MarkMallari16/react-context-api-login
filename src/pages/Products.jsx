import React from 'react'
import ProductTable from '../components/tables/ProductTable'

const Products = () => {

    return (
        <div className='p-5 w-full'>
            <h1 className='text-2xl mb-4 font-bold'>Manage Products</h1>

            <div className='mt-5'>
                <ProductTable />
            </div>
        </div>
    )
}

export default Products