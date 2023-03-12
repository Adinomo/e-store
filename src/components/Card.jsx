import React from "react";
import { useDispatch } from "react-redux";
import LinesEllipsis from "react-lines-ellipsis";
import { addToCart } from "../redux/cartSlice";

function Card({ title, price, image, products }) {
   const dispatch = useDispatch()
	const handleAddToCart = (products) => {
		dispatch(addToCart(products))
	}

	return (
		<div className="card p-3 mt-4 border-primary border-2">
			<img
				className="card-img-top"
				src={image}
				alt="Title"
			/>
			<div className="card-body">
				<h4 className="card-title">
					<LinesEllipsis
						text={title}
						maxLine="2"
						ellipsis="..."
					/>
				</h4>
				<button
					className="btn-primary btn text-white"
					onClick={() => handleAddToCart(products)}>
					Add to cart
				</button>
				<span className="card-price">${price}</span>
			</div>
		</div>
	);
}

export default Card;
