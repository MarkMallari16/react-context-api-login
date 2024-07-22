import React from 'react';
import { Modal } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
const DeleteConfirmationModal = ({ visible, onClose, onDeleteProduct, productId }) => {

    const handleOk = () => {
        onDeleteProduct(productId);
        onClose();
    };
    const handleCancel = () => {
        onClose();
    };

    return (
        <>
            <Modal
                open={visible}
                title={
                    <>
                        <InfoCircleOutlined style={{ color: '#ffa940', marginRight: 8 }} />
                        Confirm Deletion
                    </>
                }
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Delete"
                cancelText="Cancel"
                centered

            >
                <p>Are you sure you want permanently delete this product?</p>

            </Modal>
        </>
    )
}

export default DeleteConfirmationModal