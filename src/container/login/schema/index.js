export const formData = {
	email: {
		id: "email",
		label: "",
		disable: false,
		placeholder: "Enter email",
		type: "email",
		autoComplete: 'on',
		validationType: "email",
		value: "",
		targetValue: 'email.value',
		required: true,
		validation: {
			isError: false,
			isTouched: false,
			message: ""
		}
	},
	password: {
		id: "password",
		label: "",
		disable: false,
		placeholder: "Enter password",
		type: "password",
		autoComplete: 'on',
		validationType: "password",
		value: "",
		targetValue: 'password.value',
		required: true,
		validation: {
			isError: false,
			isTouched: false,
			message: ""
		}
	}
};