import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import {createProducts} from '../../store/actions'


function ProductForm() {
    const dispatch = useDispatch()
        const onFinish = (values) => {
          console.log('Success:', values);
          dispatch(createProducts(values))
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <h1>ProductForm</h1>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input Product name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Please input Product price',
                },
              ]}
            >
              <Input />
            </Form.Item>

          
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
      </Form>
    </Modal>

    </div>
    
  )
}

export default ProductForm