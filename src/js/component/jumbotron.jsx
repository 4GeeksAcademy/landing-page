import React from "react";

export const Jumbotron = () => {
	return (
		<div className="p-xs-2 p-md-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-2">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-12 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorem vel ipsa, cum architecto perspiciatis soluta eligendi, sint adipisci nesciunt aut dolorum? Autem amet sit dolores! Non assumenda voluptatum aliquid?</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
	);
};

export default Jumbotron;