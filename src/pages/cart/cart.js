import React, { useContext } from 'react'
import { PRODUCTS } from '../../DummyData/product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cartitem'
export const Cart = () => {
  const {cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=getTotalCartAmount();
  return (
    <div>
      <h1> Your Cart Items</h1>
      <div className='d-flex justify-content-center'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
              return <CartItem data={product}/>;
          }
        })}
      </div>
      <div class="card">
  <div class="card-body">
  Total:Rs{totalAmount}
  </div>
</div>
<br/>
<button class="btn btn-primary">Checkout</button>
    </div>
  )
}
