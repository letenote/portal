import React, {memo, useCallback, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const GetFormElement = React.lazy(() => import('component/GetFormElement'));
const Button = React.lazy(() => import('component/Button'));
const Login = () => {
	const [forms, setForms] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [submitLoading, setSubmitLoading] = useState(false);
	const location = useLocation();
	console.log("Login render")

	useEffect(() => {
		import('./schema')
			.then(({formData}) => {
				return setForms(formData)
			})
			.then(() => {
				return setLoaded(true)
			});
	},[]);

	const onChangeHandler = useCallback((newValue, field) => {
		return setForms(prev => ({
			...prev,
			[field]: {
				...prev[field],
				value: newValue,
				validation: {
					...prev[field]['validation'],
					isError: false,
					isTouched: false,
					message: ''
				}
			}
		}))
	},[setForms]);

	const submitHandler = useCallback(() => {
		return setSubmitLoading(true);
	},[setSubmitLoading]);

	useEffect(() => {
		import('./validation')
			.then((validation) => {
				return validation.submit( forms, setForms )
			})
			.then(() => {
				return setSubmitLoading(false)
			})
	},[submitLoading]);

	useEffect(() => {
		return () => {
			setForms(null);
			setLoaded(false);
			setSubmitLoading(false)
		}
	},[])

	return(
		<div className="background" style={{
			backgroundImage: `url(${process.env.PUBLIC_URL + '/static/media/bg_login.jpg'})`,
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover"
		}}>
			<div data-testid="login-page">login-page</div>
			<div data-testid="login-page-route">{location.pathname}</div>
			<div className="login-box card-shadow">
				<div className="content">
					<div style={{ display: "flex", justifyContent: "end", flexWrap: "nowrap", marginBottom: 88 }}>
						<div style={{ position: 'absolute', top: '10px', left: '-23px' }}>
							<img
								width={234}
								height={140}
								src={'static/media/prudential_logo_login.png'}
								alt="Logo"
								draggable={false}
							/>
						</div>
						<div style={{ width: '300px' }}>
							<div style={{ fontSize: 22, textAlign: 'right', color: '#333', fontFamily: 'FSAlbertPro-light' }}>Welcome to</div>
							<img
								style={{ position: 'absolute', right: '53px'}}
								width={300}
								height={35}
								src={'static/media/PRUMedicalNetwork Portal_Logo.png'}
								alt="Logo"
								draggable={false}
							/>
						</div>
					</div>
					<React.Suspense fallback={""}>
						<div>
							{
								!loaded
									? <div style={{ height : 170 }}/>
									: Object.keys(forms).map((form, formIndex) => {
											const currentDefaultField = forms[form];
											console.log(forms[form],'po')
											return(
												<GetFormElement
													key={formIndex}
													disable={currentDefaultField.disable}
													label={currentDefaultField.label}
													id={currentDefaultField.id}
													name={currentDefaultField.targetValue} // => path obj for store/save value
													placeholder={currentDefaultField.placeholder}
													type={currentDefaultField.type}
													autoComplete={currentDefaultField.autoComplete}
													onChange={(e) => onChangeHandler(e.target.value, form)}
													// onBlur={fields.handleBlur}
													value={currentDefaultField.value}
													required={currentDefaultField.required}
													validation={{
														isError: currentDefaultField.validation.isError,
														isTouched: currentDefaultField.validation.isTouched,
														message: currentDefaultField.validation.message
													}}
												/>
											)
										})
							}
							<Button
								type="submit"
								title={"LOGIN"}
								style={{ marginTop: 10, marginBottom: 25 }}
								loadingIndicator={submitLoading}
								onClick={() => submitHandler()}
							/>
						</div>
					</React.Suspense>
				</div>
			</div>
			<div style={copyrightStyle}>
				Copyright © 2019 Prudential Indonesia. All right reserved.
			</div>
		</div>
	)
}

const copyrightStyle = {
	display: 'table',
	paddingBottom: 30,
	bottom: 0,
	margin: 'auto',
	position: 'absolute',
	left: 0,
	right: 0,
	fontFamily: 'FSAlbertPro',
	fontSize: 14,
	color: '#7d7d7d'
}

export default memo(Login, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})