import React, { createContext, useState } from "react";

const AppContext = (defaultValue) => {
	const LangContext = createContext(defaultValue);
	const LangProvider = (props) => {
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
		LangProvider,
	}
};

export default AppContext();