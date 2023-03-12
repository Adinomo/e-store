import React,{ useEffect } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import callApi from "../api/products";

function Home() {
   const { products } = useSelector(state => state.products);
 
	const dispatch = useDispatch()
   useEffect(() => {
	  dispatch(callApi())
	}, [])
	

	console.log(products)

	return (
		<div className="app container">
			<div className="d-grid gap-4 w-100">
				{products.map((item) => (
					<Card
						key={item.id}
						title={item.title}
						price={item.price}
						image={item.image}
						products={item}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
