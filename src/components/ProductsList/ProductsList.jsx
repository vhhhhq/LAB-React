import React, {useEffect} from 'react'
import { Avatar, List} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './ProductsList.scss';
import { fetchProducts } from '../../store/actions';
import {deleteProduct, updateProduct} from './../../store/actions'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import ProductForm from '../ProductForm/ProductForm';



const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector((store => store.products));
    const productsLoading = useSelector((store => store.productsLoading))


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const deleteItem = (values)=>{
        dispatch(deleteProduct(values))
        
        console.log(values)
    }
    
    const updateItem = (values)=>{
        dispatch(updateProduct(values))
        
        console.log(values)
    }
    

    console.log('products', products)


  return (
   <div className='list'>
    <ProductForm/>
    <h1>Products List</h1>
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
                <button><EditOutlined onClick={()=>{updateItem(item.id)}}/></button>
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