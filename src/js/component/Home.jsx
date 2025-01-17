import React from "react";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
