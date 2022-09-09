import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Upload } from 'antd';
import { useDispatch } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import {createProducts} from '../../store/actions'
import './ProductForm.scss'


function ProductForm() {
    const dispatch = useDispatch()
    const [form]=Form.useForm()
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
    <div className='button'>
      <Button type="primary" onClick={showModal}>
        ADD
      </Button>
        <Modal footer={null} title="ID" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
            {/* <Form.Item label="Upload"  name="image">
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item> */}
            <Form.Item>
              <div className='btn-ant'>
                <Button onClick={handleOk} type="primary" htmlType="submit">
                  Save
                </Button>
              </div>
            </Form.Item>
      </Form>
    </Modal>

    </div>
    
  )
}

export default ProductForm