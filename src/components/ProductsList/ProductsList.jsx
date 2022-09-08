import React, {useEffect, useState } from 'react'
import { Avatar, List, Modal, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './ProductsList.scss';
import { fetchProducts } from '../../store/actions';


import update from '../assets/edit.png'
import cancel from '../assets/delete.png'

function ProductsList({ item, index, deleteTodoItem, updateTodoItem }) {
    const dispatch = useDispatch();

    const products = useSelector((store => store.products));
    const productsLoading = useSelector((store => store.productsLoading))
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    console.log('products', products)

    
  return (
   <div>
    <h1>ProductsList</h1>
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
                <button onClick={() => updateTodoItem(item)}><img src={update} className='update' /></button>
                <button onClick={() => deleteTodoItem(item)}> <img src={cancel} className='cancel' /> </button>
            </div>
        </List.Item>
        )}

    />   
   </div>
  )
}

export default ProductsList