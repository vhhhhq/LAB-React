import React, { useEffect} from 'react';
import { Button, Modal, Form, Input, Upload } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {createProduct, setModalState, editProducts, setEditProduct} from '../../store/actions'
import './ProductForm.scss'


function ProductForm() {
  const dispatch = useDispatch();
  const editProduct = useSelector((store) => store.editProduct)
  const isModalOpen = useSelector((store) => store.isModalOpen)
  const [form] = Form.useForm()
   
  useEffect(() => {
    if (!editProduct) return
    form.setFieldsValue(editProduct)

  }, [form, editProduct])




  const showModal = () => {
    dispatch(setModalState(true));

  };

  const closeModal = () => {
    dispatch(setModalState(false));
    dispatch(setEditProduct(null))
    form.resetFields()
  }



  const onFinish = (values) => {
    if (editProduct) {
      dispatch(editProducts(values, editProduct.id))
      dispatch(setEditProduct(null))
    } else {
      dispatch(createProduct(values))
    }

    setTimeout(() => {
      form.resetFields()
    }, 0);

    dispatch(setModalState(false))

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const title = editProduct ? 'Update' : 'Create'
  const modalTitle = editProduct ? 'Update Product' : 'Create Product'


  
  return (
    <div className='button'>
      <Button type="primary" onClick={showModal}>
        ADD
      </Button>
        <Modal footer={null} title={modalTitle} open={isModalOpen} onCancel={closeModal}>
          <Form
            form={form}
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
              label="Image"
              name="image"
              valuePropName="file"
            >
              <Upload
                accept=".png, .jpg"
                listType='picture-card'
                beforeUpload={() => false}
                multiple={false}
                maxCount={1}
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <div className='btn-ant'>
              <Button type="primary" htmlType="submit">
                {title}
              </Button>
              </div>
            </Form.Item>
      </Form>
    </Modal>

    </div>
    
  )
}

export default ProductForm