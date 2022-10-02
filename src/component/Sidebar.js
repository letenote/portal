import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
	console.log("sidebar render")
	return(
		<div className="App-sidebar color-light-grey" style={{ width: '20%' }}>
			<ul>
				<li>
					<Link to="/">Public Page</Link>
				</li>
				<li>
					<Link to="/protected">Protected Page</Link>
				</li>
			</ul>
		</div>
	)
}

export default React.memo(Sidebar,(prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})