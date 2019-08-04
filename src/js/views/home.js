import React from "react";

import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<div className="text-center mt-5">
							{store.films &&
								store.films.map((item, index) => {
									console.log(store.films);
									return <li key={index}>{item.title}</li>;
								})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
