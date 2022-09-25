import React from "react";

import "./team.css";

function Team(props) {
	return (
		<div className="team-container">
			<h4>{props.name}</h4>
		</div>
	);
}

export default Team;
