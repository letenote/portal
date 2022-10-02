export const formData = {
	email: {
		id: "email",
		label: "",
		disable: false,
		placeholder: "Enter email",
		type: "text",
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