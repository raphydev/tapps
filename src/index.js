import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './Stores/ConfigureStore';
import './Includes/bootstrap';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
