import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs"

function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	console.log(cartItems);

	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	}
	return (
		<div className="container">
			<h5 className="text-center mt-3">CART</h5>
			{cartItems.length > 0 ? (
				<div className="d-none d-md-flex border-bottom position-relative justify-content-between">
					<h5 className="cart-info">Title</h5>
					<h5 className="me-5">price</h5>
					<h5 className="me-5">Quantity</h5>
					<h5 className=""></h5>
				</div>
			) : null}
			{cartItems.length > 0 ? (
				cartItems.map((item) => (
					<CartItem
						title={item.title}
						img={item.image}
						price={item.price}
						cartQuantity={item.cartQuantity}
						item={item}
					/>
				))
			) : (
				<div className="d-flex flex-column align-items-center mt-5">
					<IconContext.Provider value={{ size: "3rem", color: "#949aa5" }}>
						<HiOutlineShoppingBag />
					</IconContext.Provider>
					<p className="text-center text-secondary">
						There are no items in your shopping cart
					</p>
					<IconContext.Provider value={{ size: "1.5rem", color: "#949aa5" }}>
						<Link
							to={"/"}
							className="text-decoration-none">
							<p className="text-secondary pointer-event">
								<BsArrowLeft /> start shopping
							</p>
						</Link>
					</IconContext.Provider>
				</div>
			)}
			{cartItems.length > 0 
			 ? (<div className="d-flex flex-column flex-md-row justify-content-between p-1 mt-3">
				<span>
					<button className="btn border text-secondary" onClick={() => handleClearCart()}>Clear Cart</button>
				</span>
				<div className="subtotal">
					<div className="values d-flex flex-row justify-content-between">
						<p className="fw-bold fs-5">Subtotal</p>
						<span className="fw-bold fs-5">$0</span>
					</div>
					<p className="text-secondary fs-6 mt-0 shipping">
						taxes and shipping calculated at checkout
					</p>
					<button className="btn btn-primary w-100 fw-bolder p-2">CHECKOUT</button>
					<IconContext.Provider value={{ size: "1.5rem", color: "#949aa5" }}>
						<Link
							to={"/"}
							className="text-decoration-none">
							<p className="text-secondary pointer-event">
								<BsArrowLeft /> continue shopping
							</p>
						</Link>
					</IconContext.Provider>
				</div>
			</div>)
			: null
			}
		</div>
	);
}

export default Cart;
