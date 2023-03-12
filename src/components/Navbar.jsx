import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg border-bottom container">
			<div className="container-fluid border-1">
				<a
					className="navbar-brand text-primary"
					href="#">
					E-STORE
				</a>
				<div
					className="navbar"
					id="navbarScroll">
					<ul
						className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
						style={{ scrollHeight: "100px" }}>
						<li className="nav-item">
							<NavLink
								className="nav-link nav-hover"
								style={({ isActive }) => ({
									borderBottom: isActive ? "2px solid hsl(26, 100%, 55%)" : "",
								})}
								to="/">
								Home
							</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								to="/cart"
								className="nav-link px-3">
								<HiShoppingBag size={28} />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
