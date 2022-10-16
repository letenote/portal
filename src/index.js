import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import 'App.css';
import 'fonts/FSAlbertPro-Bold.ttf';
import 'fonts/FSAlbertPro-Light.ttf';
import 'fonts/FSAlbertPro-Bold.ttf';
import 'fonts/FSAlbertPro-ExtraBold.ttf';
import App from 'App';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import reportWebVitals from 'reportWebVitals';
import AppContext from "context/AppContext";
import { BrowserRouter } from 'react-router-dom';

const { AppProvider } = AppContext;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AppProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AppProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
