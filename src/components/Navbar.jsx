import React from "react";
import { HiShoppingBag } from "react-icons/hi";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg border-bottom">
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
							<a
								className="nav-link"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								href="#"
								className="nav-link px-3">
								<HiShoppingBag size={28}/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
