import React from "react";
import Team from "./components/Team";

function Config(props) {
	let teams = ["hello", "world", "!"];
	return (
		<div className='"config-container'>
			<div className="teams">
				{teams.map((element, i) => (
					<Team key={i} name={element} />
				))}
			</div>
		</div>
	);
}

export default Config;
