import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import AppContext from "context/AppContext";

const { UserContext } = AppContext;
const Sidebar = () => {
	const { user, updateUser } = useContext(UserContext);
	const navigate = useNavigate();
	console.log("render sidebar", user.permissions)
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
								<Link to="/prot*ected8">Random Page</Link>
							</li>
							<li>
								<Link to="/login">Login Page</Link>
							</li>
						</ul>
					</div>
				)
			}
			<div 
				onClick={async() => {
					await updateUser({
						auth: false,
						permissions: null
					});
					return navigate("/"); 
				}}
			>Logout</div>
		</div>
	)
}

export default React.memo(Sidebar,(prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})