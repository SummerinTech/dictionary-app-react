import React from "react";
import "./Styles/Photos.css";

const Photos = (props) => {
	if (props.photos) {
		return (
			<section className="Photos">
				<div className="row">
					{props.photos.map((photo, index) => {
						return (
							<div className="col-lg-4 pb-4" key={index}>
								<a href={photo.src.original} target="__blank" rel="noreferrer">
									<img
										src={photo.src.landscape}
										className="img-fluid"
										alt={props.keyword}
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else return null;
};

export default Photos;
