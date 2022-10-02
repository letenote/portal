import React from "react";
import {Outlet, useLocation} from "react-router-dom";

const Sidebar = React.lazy(() => import('component/Sidebar'));
const Layout = () => {
	const history = useLocation();
	const isLoginPage = history.pathname === "/login";
	console.log("history", history)
	return (
		<div>
			{ isLoginPage ? null : <Sidebar/>}
			<main style={{ marginLeft: `${isLoginPage ? 0 : 25}%` }}>
				<Outlet />
			</main>
		</div>
	);
}

export default React.memo(Layout, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})