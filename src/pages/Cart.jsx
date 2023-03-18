import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import realimg from "../assets/images/image-product-1.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";

function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	console.log(cartItems);
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
				</div>
			)}
			<CartItem
				title="longsleeve stylish t-shirt for adults black label"
				img={realimg}
				price="28"
				cartQuantity={2}
			/>
		</div>
	);
}

export default Cart;
