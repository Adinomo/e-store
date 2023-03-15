import React from "react";
import image from "../assets/images/image-product-1.jpg";
import deleteImg from "../assets/images/icon-close.svg";

function CartItem({ title, img, price, cartQuantity }) {
	return (
		<div className="container-fluid mt-2">
			<div className="cart-item pb-2 border-bottom d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center cart-info">
					<img
						src={img}
						alt=""
						className="cart-item-img"
					/>
					<h4 className="px-2">{title}</h4>
				</div>
				<p>{`$${price * cartQuantity}`}</p>
				<div className="cart-item-quantity d-flex ">
					<div className="border p-1 px-3">-</div>
					<div className="border p-1 px-3">{cartQuantity}</div>
					<div className="border p-1 px-3">+</div>
				</div>
				<img
					src={deleteImg}
					alt="delete"
					className="cart-delete"
				/>
			</div>
		</div>
	);
}

export default CartItem;
