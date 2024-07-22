import React, { useState } from 'react'
import AddProductModal from '../modal/AddProductModal'
import { Button, Input } from 'antd'
import { ProductOutlined } from '@ant-design/icons'
import DeleteConfirmationModal from '../modal/DeleteConfirmationModal';
import useProducts from '../../hooks/useProducts';
import useModal from '../../hooks/useModal';
import EditProductModal from '../modal/EditProductModal';

const ProductTable = () => {
    const { products, addProduct, deleteProduct, updateProduct, sortProducts, sortOrder } = useProducts();
    const { isModalOpen, showModal, hideModal } = useModal();
    const { isModalOpen: isDeleteModalOpen, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();
    const { isModalOpen: isEditModalOpen, showModal: showEditModal, hideModal: hideEditModal } = useModal();

    const [selectedProductId, setSelectedProductId] = useState(null);
    const [productToEdit, setProductToEdit] = useState();
    const [searchProduct, setSearchProduct] = useState("");


    const handleAddProduct = (newProduct) => {
        addProduct(newProduct);
        setSearchProduct("");
        hideModal();
    }
    const handleDeleteModalOpen = (productId) => {
        setSelectedProductId(productId);
        showDeleteModal();
    };
    const handleDeleteProduct = () => {
        deleteProduct(selectedProductId);
        hideDeleteModal();
    }
    const handleEditModalOpen = (product) => {
        setProductToEdit(product);
        showEditModal();
    }
    const handleUpdateProduct = (id, updatedProduct) => {
        updateProduct(id, updatedProduct);
        hideEditModal();
    }
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
        product.description.toLowerCase().includes(searchProduct.toLowerCase())
    )
    return (

        <div>
            <div className='flex justify-end mb-4'>
                <div className='flex gap-4'>
                    <Input.Search placeholder='Search Product' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} onSearch={(value) => setSearchProduct(value)} />
                    <Button type="primary" onClick={showModal}>
                        Add new product
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>

                    </Button>
                </div>
                <AddProductModal visible={isModalOpen} onClose={hideModal} onAddProduct={handleAddProduct} />
                <DeleteConfirmationModal
                    visible={isDeleteModalOpen}
                    onClose={hideDeleteModal}
                    onDeleteProduct={handleDeleteProduct}
                    productId={selectedProductId}
                />
                <EditProductModal
                    visible={isEditModalOpen}
                    onClose={hideEditModal}
                    product={productToEdit}
                    onUpdateProduct={handleUpdateProduct}
                />
            </div>
            <table class="table-fixed bg-white w-full rounded-lg">
                <thead className='border-b border-slate-300'>
                    <tr>
                        <th className=' lg:p-3 text-slate-900 font-medium'>ID</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Image</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Name</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Description</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Category</th>
                        <th className=' lg:p-3 text-slate-900 font-medium' onClick={sortProducts}>Price  {sortOrder === 'asc' ? '↑' : '↓'}</th>
                        <th className=' lg:p-3 text-slate-900 font-medium'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length === 0 ? (
                        <tr >
                            <td className='p-5 text-center text-slate-600 ' colSpan={7}>
                                <ProductOutlined className='text-3xl'/>
                                <p>No Product Available</p>
                            </td>
                        </tr>
                    ) : (
                        filteredProducts.map((product, _) => (
                            <tr key={product.id}>
                                <td className='p-5 text-center'>{product.id}</td>
                                <td className='p-5 text-center'>
                                    <img src="https://img.freepik.com/free-photo/yellow-backpack-school-bag-green-background-ai-generative_123827-23977.jpg?t=st=1721458097~exp=1721461697~hmac=7cae56200979d0fba2586af9055847f4fef7044c42415ad96b55645774034027&w=900" className='rounded-lg' />
                                </td>
                                <td className=' p-5 text-center'>{product.name}</td>
                                <td className=' p-5 text-center'>{product.description}</td>
                                <td className=' p-5 text-center'>{product.category}</td>
                                <td className=' p-5 text-center'>{product.price}</td>
                                <td>
                                    <span className='flex gap-2 flex-col lg:flex-row justify-center'>
                                        <Button type='primary' onClick={() => handleEditModalOpen(product)} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                        </svg>
                                        } />


                                        <Button type='primary' danger onClick={() => handleDeleteModalOpen(product.id)} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                        </svg>} />


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