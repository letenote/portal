export const submit = (forms, setForms) => {
	if(forms === null || forms === undefined) return null;
	Object.keys(forms).map((form) => {
		setForms(prev => ({
			...prev,
			[form]: {
				...prev[form],
				validation: {
					...prev[form]['validation'],
					isError: true,
					isTouched: true,
					message: "Harus diisi"
				}
			}
		}))
	});
};
