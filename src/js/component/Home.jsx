import React from "react";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
