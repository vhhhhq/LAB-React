import React, {useEffect } from 'react'
import { Avatar, List, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './ProductsList.scss';
import { fetchProducts } from '../../store/actions';

function ProductsList() {
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
            title={<a href="https://ant.design">{item.name}</a>}
            description={<div>{item.price}</div>}
            />
        </List.Item>
        )}
    /> 
   </div>
  )
}

export default ProductsList