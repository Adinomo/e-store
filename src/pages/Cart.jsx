import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

 
function Cart() {
	const {cartItems} = useSelector(state => state.cart);
	console.log(cartItems)
	return ( 
		<div className="container">
			<h4 className='text-center mt-3'>Shopping Cart</h4>
			{ cartItems.length > 0 
				? cartItems.map(item => 
					<CartItem title={item.title} img={item.image} price={item.price} cartQuantity={item.cartQuantity}/>
			   )
				: (
					<h5 className='text-center'>Your cart is empty</h5>
				)
			}
		</div>
	 );
}

export default Cart;