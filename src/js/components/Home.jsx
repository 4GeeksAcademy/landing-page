import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

const cards = [
	{
		image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
		title: "Card Title 1",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	},
	{
		image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
		title: "Card Title 2",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	},
	{
		image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",
		title: "Card Title 3",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	},
	{
		image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
		title: "Card Title 4",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	},
];

//create your first component
const Home = () => {
	return (
	<div className="container">
		<Navbar />
		<Jumbotron />
		<div className="row">
			{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
						))}
        </div>
	<Footer />
	
</div>
);		
};

export default Home;