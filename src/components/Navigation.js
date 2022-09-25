import "./navigation.css";

function Navigation(props) {
	function buttonPressed() {
		console.log("button pressed");
	}

	return (
		<div className="container">
			<div className="logo">
				<h3>Tournament</h3>
			</div>
			<div className="navigationels">
				<button onClick={buttonPressed}>
					<h5>Config</h5>
				</button>
				<button onClick={buttonPressed}>
					<h5>View</h5>
				</button>
			</div>
		</div>
	);
}

export default Navigation;
