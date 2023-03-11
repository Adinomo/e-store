import React from "react";
import LinesEllipsis from 'react-lines-ellipsis';

function Card({ title, price, image }) {
	return (
		<div className="card p-3 mt-4 border-primary border-2">
			<img
				className="card-img-top"
				src={image}
				alt="Title"
			/>
			<div className="card-body">
				<h4 className="card-title"><LinesEllipsis text={title} maxLine='2' ellipsis='...' /></h4>
				<button className="btn-primary btn text-white">Add to cart</button>
				<span className="card-price">${price}</span>
			</div>
		</div>
	);
}

export default Card;
