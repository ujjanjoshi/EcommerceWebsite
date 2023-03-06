import React from 'react'
import { ProductDetails } from './productdetails';
import { PRODUCTS } from '../../DummyData/product';
export const Product = () => {
    // const{id,productname,price,productimage}=props.data;
    return (
        <>
        <h1>Products</h1>
     <div class="row" style={{margin:"5px" , justifyContent:"center"}}>
     {
      PRODUCTS.map((product)=>(
    <ProductDetails data={product}/>))}
</div>
        </>
    )
}
