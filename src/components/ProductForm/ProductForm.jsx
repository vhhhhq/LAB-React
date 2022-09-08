import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
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
  return (
    <div>
        <h1>ProductForm</h1>
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
    </div>
    
  )
}

export default ProductForm