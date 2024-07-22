import { Avatar, Badge, Button, Dropdown, Input, List } from 'antd';
import React, { useState } from 'react'
import { BellOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
const notificationsData = [
    {
        id: 1,
        type: 'order',
        title: 'New Order Received',
        description: 'Order #1234 has been received.',
        timestamp: '2024-07-22 10:00 AM',
        read: false,
    },
    {
        id: 2,
        type: 'review',
        title: 'New Product Review',
        description: 'Product XYZ has a new review.',
        timestamp: '2024-07-22 09:00 AM',
        read: true,
    },
]
const Notifications = () => {
    const [notifications, setNotifications] = useState(notificationsData);
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("All Notifications");

    const handleMenuClick = (e) => {
        setFilter(e.key);
        console.log(filter)
    }
    const notificationItems = [
        { key: 'All Notifications', label: 'All Notifications' },
        { key: 'Orders', label: 'Orders' },
        { key: 'Reviews', label: 'Reviews' },
        { key: 'Inventory', label: 'Inventory' },
    ]
    const menu = {
        items: notificationItems,
        onClick: handleMenuClick
    }
    const filteredNotifications = notifications.filter(notif =>
        (filter === "All Notifications" || notif.type === filter.toLowerCase()) &&
        (notif.title.toLowerCase().includes(searchText.toLowerCase()) ||
            notif.description.toLowerCase().includes(searchText.toLowerCase()))
    )
    const markAsRead = (notifId) => {
        setNotifications((prevNotif) => prevNotif.map(notif =>
            notif.id === notifId ? { ...notif, read: true } : notif
        ))
    }
    const markAsUnread = (notifId) => {
        setNotifications((prevNotif) => prevNotif.map(notif =>
            notif.id === notifId ? { ...notif, read: false } : notif
        ))
    }
    return (
        <div className='p-5 w-full'>
            <h1 className='text-2xl mb-4 font-bold'>Notifications</h1>

            <div className=' bg-white border shadow-sm py-8 px-10 rounded-lg'>
                <div className='flex justify-between mb-6'>
                    <Dropdown menu={menu}>
                        <Button icon={<BellOutlined />}>Filter</Button>
                    </Dropdown>
                    <Input.Search placeholder='Search notifications'
                        onSearch={value => setSearchText(value)}
                        onChange={(e) => setSearchText(e.target.value)}
                        className='w-80' />
                </div>

                <List
                    itemLayout='horizontal'
                    dataSource={filteredNotifications}
                    renderItem={notif => (
                        <List.Item
                            actions={[
                                <Button
                                    type='link'
                                    icon={<CheckOutlined />}
                                    onClick={() => markAsRead(notif.id)}
                                    disabled={notif.read}
                                />,
                                <Button
                                    type='link'
                                    icon={<CloseOutlined />}
                                    onClick={() => markAsUnread(notif.id)}
                                    disabled={!notif.read}
                                />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar icon={<BellOutlined />} />}
                                title={<Badge dot={!notif.read}>{notif.title}</Badge>}
                                description={notif.description}
                            />
                            <div>{notif.timestamp}</div>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    )
}

export default Notifications