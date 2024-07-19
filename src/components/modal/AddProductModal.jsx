import React, { useState } from 'react'
import { Button, Modal, Form, Input, InputNumber, Select } from "antd";
import TextArea from 'antd/es/input/TextArea';

const AddProductModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add new product
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>

            </Button>
            <Modal title="Add new product" open={isModalOpen} onCancel={handleCancel}>
                <form>
                    <div className='mb-4'>
                        <label htmlFor="">Product Name: </label>
                        <Input placeholder="Enter product name" className='mt-1' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Product Description: </label>
                        <TextArea

                            placeholder="Enter product description"
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                            className='mt-1'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Product price: </label>
                        <InputNumber min={1} max={100000} defaultValue={100} className='mt-1 block w-full' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Product Name: </label>
                        <Select placeholder="Select a category" className='mt-1 block w-full' >
                            <Select.Option value="" disabled>Select category</Select.Option>
                            <Select.Option value="electronics">Electronics</Select.Option>
                            <Select.Option value="clothing">Clothing</Select.Option>
                            <Select.Option value="home">Home</Select.Option>
                        </Select>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default AddProductModal