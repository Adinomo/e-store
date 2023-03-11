import React,{ useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/sass/_app.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';


function App() {
  return (
			<BrowserRouter>
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
