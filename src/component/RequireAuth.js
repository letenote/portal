import React, {memo, useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import AppContext from "context/AppContext";

const { UserContext } = AppContext;
const RequireAuth = ({ children }) => {
	const { user } = useContext(UserContext);
	const location = useLocation();
	console.log("auth", user.auth)
	if (!user.auth) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		// return <Navigate to="/login" state={{ from: location }} replace />;
		return <Navigate to="/" state={{ from: location }} replace />;
	}

	return children;
}

export default memo(RequireAuth, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});