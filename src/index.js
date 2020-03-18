import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store, { history } from './app/_store/store'
import "./styles/sass/style.scss";
import App from "./app/App";


ReactDOM.render(<Provider store={store}>
    <App history={history}/>
</Provider>, document.getElementById('root'));