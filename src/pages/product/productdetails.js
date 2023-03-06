import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
export const ProductDetails = (props) => {
    const{id,productname,price,productimage}=props.data;
    const{addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return (
        <>
        <div class="col-sm-3 mb-2 mb-sm-0" style={{margin:'3px'}}>
             <div class="card">
             <img src={productimage} class="card-img-top" alt="..." height={'250px'} width={'250px'} />       
            <div class="card-body">
                <h5 class="card-title">{productname}</h5>
                <p class="card-text">{price}</p>
                <button type="button" class="btn btn-primary" onClick={()=> addToCart(id)}>
                    Add To Cart{cartItemAmount>0 &&<>({cartItemAmount})</>}
                    </button>
            </div>
            </div>
        </div>
        </>
    )
}
