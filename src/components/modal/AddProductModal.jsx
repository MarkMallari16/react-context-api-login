import React, { useState } from 'react'
import { Button, Modal, Form, Input, InputNumber, Select } from "antd";
import TextArea from 'antd/es/input/TextArea';

const AddProductModal = ({ visible, onClose, onAddProduct }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                form.resetFields();
                onAddProduct(values);
                onClose();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <>

            <Modal title="Add new product" open={visible} onCancel={onClose} onOk={handleOk}>
                <Form form={form} layout="vertical" name="add_product_form">
                   
                    <Form.Item
                        name="name"
                        label="Product Name"
                        rules={[{ required: true, message: 'Please input the product name!' }]}
                    >
                        <Input placeholder="Enter product name" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Product Description"
                        rules={[{ required: true, message: 'Please input the product description!' }]}
                    >
                        <TextArea
                            placeholder="Enter product description"
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Product Price"
                        rules={[{ required: true, message: 'Please input the product price!' }]}
                    >
                        <InputNumber min={1} max={100000} className="w-full" />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Product Category"
                        rules={[{ required: true, message: 'Please select a category!' }]}
                    >
                        <Select placeholder="Select a category">
                            <Select.Option value="electronics">Electronics</Select.Option>
                            <Select.Option value="clothing">Clothing</Select.Option>
                            <Select.Option value="home">Home</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AddProductModal