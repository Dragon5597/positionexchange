import React from "react";
import "../../scss/header.scss";
import Navbar from "./Navbar";
import OffCanvasMenu from "./OffCanvasMenu";
const Header = () => {
	return (
		<>
			<OffCanvasMenu />
			<Navbar />
		</>
	);
};

export default Header;
