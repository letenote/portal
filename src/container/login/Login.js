import React, {memo, useEffect, useState} from "react";

const GetFormElement = React.lazy(() => import('component/GetFormElement'));
const Button = React.lazy(() => import('component/Button'));
const Login = () => {
	const [forms, setForms] = useState({});
	const [loaded, setLoaded] = useState(false);
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

	return(
		<div className="background" style={{
			backgroundImage: `url(${process.env.PUBLIC_URL + '/static/media/bg_login.jpg'})`,
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover"
		}}>
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
													// onChange={fields.handleChange}
													// onBlur={fields.handleBlur}
													value={currentDefaultField.value}
													required={currentDefaultField.required}
													validation={{
														isError: false,
														isTouched: false,
														message: ''
													}}
												/>
											)
										})
							}
							<Button
								type="submit"
								title={"LOGIN"}
								style={{ marginTop: 10, marginBottom: 25 }}
							/>
						</div>
					</React.Suspense>
				</div>
			</div>
		</div>
	)
}

export default memo(Login, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})