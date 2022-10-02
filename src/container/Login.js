import React from "react";

const Login = () => {
	console.log("Login render")
	return(
		<div className="background" style={{
			backgroundImage: `url(${process.env.PUBLIC_URL + '/static/image/bg_login.jpg'})`,
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover"
		}}>
			<div className="div-center">
				<div className="content">
					<h3>Login</h3>
					<hr/>


				</div>
			</div>
		</div>
	)
}

export default React.memo(Login, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
})