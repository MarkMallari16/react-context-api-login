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
                Open Modal
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