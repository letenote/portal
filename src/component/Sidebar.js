import React, {useContext} from "react";
import {Link} from "react-router-dom";
import AppContext from "context/AppContext";

const { UserContext } = AppContext;
const Sidebar = () => {
	const { user } = useContext(UserContext);
	console.log("sidebar render", user.permissions)
	return(
		<div className="App-sidebar color-light-grey" style={{ width: '20%' }}>
			{
				user.permissions !== null && (
					<div>
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
		</div>
	)
}

export default React.memo(Sidebar,(prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})