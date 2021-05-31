import React, { Fragment } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const MyCard = () => {
	return (
		<Fragment>
			<div className="card my-card">
				<img src={rigoImageUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</Fragment>
	);
};
