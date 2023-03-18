import React from "react";
import image from "../assets/images/image-product-1.jpg";
import deleteImg from "../assets/images/icon-delete.svg";
import { MdDelete } from 'react-icons/md';
import { IconContext } from "react-icons";

function CartItem({ title, img, price, cartQuantity }) {
	return (
		<div className="container-fluid mt-2">
			<div className="cart-item pb-2 pt-2 border-bottom d-block d-md-flex align-items-center justify-content-between">
				<div className="d-flex align-items-center cart-info">
					<img
						src={img}
						alt=""
						className="cart-item-img"
					/>
					<h5 className="px-2">{title}</h5>
				</div>
				<p className="mt-3">
					<span className="d-md-none">Price: </span>
					<span className="fw-bold">{`$${price * cartQuantity}`}</span>
				</p>
				<div className="cart-item-quantity d-flex align-items-center">
					<span className="d-md-none pe-2">Quantity:</span>
					<div className="d-flex border rounded-pill">
						<div className="p-1 px-3 border-end fw-bold">-</div>
						<div className="p-1 px-3 border-end fw-bold">{cartQuantity}</div>
						<div className="p-1 px-3 fw-bold">+</div>
					</div>
				</div>
				<IconContext.Provider
					value={{ size: "1.3rem", color: "#949aa5", className: "mt-3 mt-md-0 pointer" }}>
					<MdDelete />
				</IconContext.Provider>
			</div>
		</div>
	);
}

export default CartItem;
