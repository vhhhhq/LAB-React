import React, {useEffect} from 'react'
import { Avatar, List} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './ProductsList.scss';
import { fetchProducts, setModalState, setEditProduct, setModalType } from '../../store/actions';
import {deleteProduct} from './../../store/actions'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import ProductForm from '../ProductForm/ProductForm';



const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.products).sort((a, b) => b.id - a.id)
    const productsLoading = useSelector((store) => store.productsLoading)
    


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const showModal = () => {
        dispatch(setModalState(true));
    };
    
    
    const handleEdit = (values) => {
        dispatch(setEditProduct(values))
        showModal()
        dispatch(setModalType(false))
    }
    
    const deleteItem = (values) => {
        dispatch(deleteProduct(values))
    
    }
    

    console.log('products', products)


  return (
   <div className='list'>
    <ProductForm/>
    <h1>Product List</h1>
     <List
        loading={productsLoading}
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
        <List.Item>
            <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={<a href="#">{item.name}</a>}
            description={<div>{item.price}</div>}
            />
            
            <div className="btns">
                <button><EditOutlined onClick={() => handleEdit(item)}/></button>
                {' '}
                <button><DeleteOutlined onClick={()=>{deleteItem(item.id)}}/></button>
            </div>
        </List.Item>
        )}

    />   
   </div>
  )
}

export default ProductsList