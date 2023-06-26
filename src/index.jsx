import React from 'react';
import ReactDOM from 'react-dom/client';
import './asset/style/index.scss';
import App from './App';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RecoilRoot> 
		<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
		<App />
		</GoogleOAuthProvider>
	</RecoilRoot> 

);

serviceWorkerRegistration.register();
