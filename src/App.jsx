import React,{ useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './assets/sass/_app.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Card from './components/Card';

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [datas, setDatas] = useState([ ]);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await fetch("https://fakestoreapi.com/products");
			if (!response.ok) {
				throw new Error("Data coud not be fetched!");
			} else {
				const data = await response.json();
				console.log(data);
				setDatas(data);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(datas)

  return (
			<div className="app container">
				<Navbar />
				<div className='d-grid gap-4 w-100'>
					{
						datas.map(item => <Card key={item.id} title={item.title} price={item.price} image={item.image} />)
					}
				</div>
			</div>
		);
}

export default App
