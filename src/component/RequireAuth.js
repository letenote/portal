import React, {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import AppContext from "../context/AppContext";

const { LangContext } = AppContext;
const RequireAuth = ({ children }) => {
	const auth = useContext(LangContext);
	let location = useLocation();
	console.log("auth", auth)
	if (!auth.user) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

export default React.memo(RequireAuth);