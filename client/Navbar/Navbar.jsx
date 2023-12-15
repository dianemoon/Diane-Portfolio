// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements/NavbarElements.jsx";

const Navbar = () => {
	return (
		<>
			<Nav>

				<NavMenu>
					<NavLink to="/" activeStyle>
						Your Pet
					</NavLink>
					<NavLink to="/pet" activeStyle>
						The Pet Shoppe
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
