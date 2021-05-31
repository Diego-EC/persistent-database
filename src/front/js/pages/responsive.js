import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { MyCard } from "../component/my-card";

export const Responsive = () => {
	const { store, actions } = useContext(Context);

	// https://getbootstrap.com/docs/4.5/layout/grid/
	// https://www.w3schools.com/bootstrap4/bootstrap_grid_basic.asp
	// https://getbootstrap.com/docs/4.5/layout/grid/#row-columns

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">.col-4</div>
				<div className="col-8">.col-8</div>
			</div>
			<div className="row">
				<div className="col-sm-4">.col-sm-4</div>
				<div className="col-sm-8">.col-sm-8</div>
			</div>
			<div className="row">
				<div className="col-md-4">.col-md-4</div>
				<div className="col-md-8">.col-md-8</div>
			</div>
			<div className="row">
				<div className="col-lg-4">.col-lg-4</div>
				<div className="col-lg-8">.col-lg-8</div>
			</div>
			<div className="row">
				<div className="col-xl-4">.col-xl-4</div>
				<div className="col-xl-8">.col-xl-8</div>
			</div>
			<div className="row">
				<MyCard />
			</div>
			<div className="row">
				<div className="col-4">
					<MyCard />
				</div>
				<div className="col-4">
					<MyCard />
				</div>
				<div className="col-4">
					<MyCard />
				</div>
			</div>
			<div className="container">
				<div className="row row-cols-lg-2">
					<div className="col">Column</div>
					<div className="col">Column</div>
					<div className="col">Column</div>
					<div className="col">Column</div>
					<div className="col">Column</div>
				</div>
			</div>
		</div>
	);
};
