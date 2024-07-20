import { Input, Form, Button } from 'antd'
import React, { useContext } from 'react'
import { LogInContext } from '../contexts/LogInContext';

const Settings = () => {
    const [form] = Form.useForm();
    const { updateProfile, username, password } = useContext(LogInContext);
    
    const handleSubmit = (values) => {
        const { name, password } = values;
        updateProfile(name, password)
        form.setFieldsValue({
            name: name,
            passowrd: password
        })
    }
    return (
        <div className='p-5 w-full'>
            <h1 className='text-2xl mb-4 font-bold'>Settings</h1>

            <div className='bg-white rounded-xl p-5'>
                <div className='mb-4'>
                    <h2 className='text-lg font-medium'>Profile Details</h2>
                    <p className='text-slate-800 text-md'>You can change your personal details here</p>
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    initialValues={{
                        name: username,
                        password: password
                    }}>
                    <Form.Item
                        name="name"
                        label="Username"
                        rules={[{ required: true, message: "Please enter your username" }]}
                    >
                        <Input placeholder="Enter username" className='w-80 lg:w-96' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: "Please enter your password" }]}
                    >
                        <Input.Password placeholder="Enter password" className='w-80 lg:w-96' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Settings