import React, { createContext, useState } from "react";

const AppContext = (defaultValue) => {
	const LangContext = createContext(defaultValue);
	const AppProvider = (props) => {
		const [user, setUser] = useState(false);
		const changeUser = e => setUser(true);
		const langState = { user, changeUser };
		return (
			<LangContext.Provider value={langState}>
				{props.children}
			</LangContext.Provider>
		);
	}

	return {
		LangContext,
		AppProvider,
	}
};

export default AppContext();