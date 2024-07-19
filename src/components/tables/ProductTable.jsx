import React, { useState } from 'react'
import AddProductModal from '../modal/AddProductModal'
import { Button } from 'antd'
import DeleteConfirmationModal from '../modal/DeleteConfirmationModal';

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const showDeleteModal = (productId) => {
        setIsDeleteModalOpen(true);
        setSelectedProductId(productId)
    }
    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    }
    const sortProducts = () => {
        const sortedProducts = [...products].sort((a, b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        })

        setProducts(sortedProducts);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    const addProduct = (product) => {
        const newProduct = { ...product, id: products.length + 1 };
        setProducts([...products, newProduct]);
        setIsModalOpen(false);
    }
    const deleteProduct = (id) => {
        const filterProducts = products.filter((product) => product.id !== id);

        setProducts(filterProducts);
        setIsDeleteModalOpen(false);
    }
    return (

        <div>
            <div className='flex justify-end mb-4'>
                <Button type="primary" onClick={showModal}>
                    Add new product
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>

                </Button>
                <AddProductModal visible={isModalOpen} onClose={handleCancel} onAddProduct={addProduct} />
                <DeleteConfirmationModal
                    visible={isDeleteModalOpen}
                    onClose={handleDeleteCancel}
                    onDeleteProduct={deleteProduct}
                    productId={selectedProductId} />
            </div>
            <table class="table-fixed bg-white w-full rounded-lg ">
                <thead className='border-b border-slate-300'>
                    <tr>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Product ID</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Product Image</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Product Name</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Product Description</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Product Category</th>
                        <th className=' lg:p-3 text-slate-900 font-medium' onClick={sortProducts}>Price  {sortOrder === 'asc' ? '↑' : '↓'}</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (
                        <tr >
                            <td className='p-5 text-center text-slate-600' colSpan={7}>No product</td>
                        </tr>
                    ) : (
                        products.map((product, _) => (
                            <tr key={product.id}>
                                <td className='p-5 text-center'>{product.id}</td>
                                <td className='flex justify-center'>
                                    <img src={product.imageUrl} className='w-20' />
                                </td>

                                <td className=' p-5 text-center'>{product.name}</td>
                                <td className=' p-5 text-center'>{product.description}</td>
                                <td className=' p-5 text-center'>{product.category}</td>
                                <td className=' p-5 text-center'>{product.price}</td>
                                <td>
                                    <span className='flex gap-2 flex-col lg:flex-row justify-center'>
                                        <Button type='primary' >Edit</Button>
                                        <Button type='primary' danger onClick={() => showDeleteModal(product.id)}>Delete</Button>
                                    </span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default ProductTable