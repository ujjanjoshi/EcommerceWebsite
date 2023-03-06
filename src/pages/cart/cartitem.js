import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
export const CartItem = (props) => {
    const{id,productname,price,productimage}=props.data;
    const{cartItems,addToCart,removeFromCart}=useContext(ShopContext);
  return (
    <div class="card" style={{maxWidth:"900px", padding:"30px", margin:"10px"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={productimage} class="img-fluid rounded-start" alt="..." height={'250px'} width={'250px'}/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"><b>{productname}</b></h5>
          <p class="card-text">Rs. {price}</p>
          <p class="card-text"><small class="text-muted">
            <button type="button" class="btn btn-primary btn-sm" onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} style={{textAlign:"center" ,width:"50px"}}/>
            <button type="button" class="btn btn-primary btn-sm" onClick={()=>addToCart(id)}>+</button>
            </small></p>
        </div>
      </div>
    </div>
  </div>

  )
}
