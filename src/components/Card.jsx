import React from "react";
//import image from '../assets/images/image-product-1.jpg';

function Card({ title, price, image }) {
	return (
		<div className="card p-3 mt-4 border-primary border-2">
			<img
				className="card-img-top"
				src={image}
				alt="Title"
			/>
			<div className="card-body">
				<h4 className="card-title">{title}</h4>
				<button className="btn-primary btn text-white">Add to cart</button>
				<span className="card-price">${price}</span>
			</div>
		</div>
	);
}

export default Card;
