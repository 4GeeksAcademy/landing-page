import React from "react";

export const Card = () => {
	return (
		<div className="card text-center card-custom" >
            <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique doloremque in quod saepe, omnis cumque quibusdam? 
                    <br />
                    <br />
                </p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
	);
};

export default Card;