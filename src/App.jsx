import React from 'react';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/sass/_app.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';


function App() {
  return (
			<BrowserRouter>
			   <ToastContainer />
				<Navbar />
				<Routes>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="cart"
						element={<Cart />}
					/>
				</Routes>
			</BrowserRouter>
		);
}

export default App
