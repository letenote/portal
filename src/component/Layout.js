import React, { lazy, memo } from "react";
import {Outlet, useLocation} from "react-router-dom";

const Sidebar = lazy(() => import('component/Sidebar'));
const Layout = () => {
	const history = useLocation();
	const isLoginPage = history.pathname === "/login";
	const isHomePage = history.pathname === "/";
	console.log("history", history)
	return (
		<div>
			{ isLoginPage || isHomePage ? null : <Sidebar/>}
			<main
				style={{
					marginLeft: `${isLoginPage || isHomePage ? 0 : 25}%`,
					padding: `${isLoginPage || isHomePage ? 0 : 40}px`
				}}
			>
				<Outlet />
			</main>
		</div>
	);
}

export default memo(Layout, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})