import React, { useState } from 'react'
import AddProductModal from '../modal/AddProductModal'
import { Button } from 'antd'

const ProductTable = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'The Sliding Mr. Bones (Next Stop, Pottersville)',
            price: 2000,
            imageUrl: 'https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?t=st=1721321220~exp=1721324820~hmac=1e47d0f8a91dda7cb0fe4b7558ad5e94b509fd3204ff5c0f59964708cc242b68&w=740'
        },
        {
            id: 2,
            name: 'Malcolm Lockyer',
            price: 4000,
            imageUrl: 'https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?t=st=1721321220~exp=1721324820~hmac=1e47d0f8a91dda7cb0fe4b7558ad5e94b509fd3204ff5c0f59964708cc242b68&w=740'
        },
    ]);
    const [sortOrder, setSortOrder] = useState("asc");

    const sortProducts = () => {
        const sortedProducts = [...products].sort((a, b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        })

        setProducts(sortedProducts);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    return (

        <div>
            <div className='flex justify-end mb-4'>
                <AddProductModal />
            </div>
            <table class="table-fixed bg-white w-full rounded-lg shadow-md">
                <thead className='border-b border-slate-300'>
                    <tr>
                        <th className=' lg:p-3 text-slate-900'>Product ID</th>
                        <th className=' lg:p-3 text-slate-900'>Product Image</th>
                        <th className=' lg:p-3 text-slate-900'>Product Name</th>
                        <th className=' lg:p-3 text-slate-900' onClick={sortProducts}>Price  {sortOrder === 'asc' ? '↑' : '↓'}</th>
                        <th className=' lg:p-3 text-slate-900'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, _) => (
                        <tr>
                            <td className='p-5 text-center'>{product.id}</td>
                            <td className='flex justify-center'>
                                <img src={product.imageUrl} className='w-20' />
                            </td>

                            <td className=' p-5 text-center'>{product.name}</td>
                            <td className=' p-5 text-center'>{product.price}</td>
                            <td>
                                <span className='flex gap-2 flex-col lg:flex-row justify-center'>
                                    <Button type='primary' >Edit</Button>
                                    <Button type='primary' danger>Delete</Button>
                                </span>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default ProductTable