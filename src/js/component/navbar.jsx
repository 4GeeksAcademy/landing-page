import React from "react";

export const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="me-auto"></ul>
                    <div className="navbar-nav">
                        
                        <a className="nav-link active" href="#">
                            Home
                        </a>
                       
                        <a className="nav-link" href="#">
                            About
                        </a>
                        
                        <a className="nav-link" href="#">
                            Services
                        </a>

                        <a className="nav-link" href="#">
                            Contact
                        </a>
                       
                    </div>
                </div>
            </div>
        </nav>
	);
};

export default Navbar;