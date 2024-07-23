import React from 'react'
import { Modal, Form, Input, InputNumber, Select, Upload, Button } from "antd";
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
const AddProductModal = ({ visible, onClose, onAddProduct }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                const { image, ...productData } = values
                if (image && image.length > 0) {
                    productData.image = image[0].originFileObj;
                   
                } else {
                    productData.image = null;
                }

                form.resetFields();
                onAddProduct(productData);
                onClose();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };
    const normFile = e => {
        if (Array.isArray(e)) {
            return e
        }
        return e && e.fileList;
    }
    return (
        <>

            <Modal title="Add new product" open={visible} onCancel={onClose} onOk={handleOk} okText="Confirm">
                <Form form={form} layout="vertical" >
                    <Form.Item
                        name="image"
                        label="Product Image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: 'Please upload a product image!' }]}
                    >
                        <Upload name="image" listType='picture' beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />}>Upload Image</Button>
                        </Upload>
                    </Form.Item>
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