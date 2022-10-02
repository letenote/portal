import React, { createContext, useState } from "react";

const AppContext = (defaultValue) => {
	const UserContext = createContext(defaultValue);
	const AppProvider = (props) => {
		const [user, setUser] = useState({
			auth: false,
			permissions: null
		});
		const updateUser = () => {

		};
		const globalState = { user, updateUser };
		return (
			<UserContext.Provider value={globalState}>
				{props.children}
			</UserContext.Provider>
		);
	}

	return {
		UserContext,
		AppProvider,
	}
};

export default AppContext();