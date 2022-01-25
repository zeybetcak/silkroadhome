import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
  ? Number(props.location.search.split('=')[1])
  : 1;
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
  if (productId) {
    dispatch(addToCart(productId, qty));
  }
  }, [dispatch, productId, qty]);
  return (
<div className = "row top"> 
<div className="col-2">
  <h1> Shopping Cart </h1>
  { cartItems.length === 0? <MessageBox> 
  Cart is empty. <Link to ="/"> Go Shopping </Link>
  </MessageBox>
  ) : ( 
    <ul>
    {cartItems.map((item) => (
    <li key= {item.product}>
      <div className="row">
        <div> 
          <img 
          src = {item.image}
          alt = {item.name}
          className= "small">
          </img>
        </div>
  </div>
  </li>
    ))}
    </ul>
  </div>
  )}
  </div>
  }

export default CartScreen;
