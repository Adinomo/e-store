import React,{ useEffect } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import callApi from "../api/products";
import { BounceLoader } from "react-spinners";
import { BiErrorCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function Home() {
   const { products, loading, error_msg } = useSelector(state => state.products);
 
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
			{
				<div className="d-flex justify-content-center align-items-center spinner">
					<BounceLoader
						color="#ff7d1a"
						loading={loading}
					/>
				</div>
			}
			{error_msg && (
				<div className="d-flex flex-column align-items-center justify-content-center">
					<IconContext.Provider value={{ size: "3.5em", color: "#949aa5" }}>
						<BiErrorCircle />
						<p className="text-secondary">{error_msg}</p>
					</IconContext.Provider>
				</div>
			)}
		</div>
	);
}

export default Home;
