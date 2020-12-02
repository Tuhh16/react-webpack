import './style.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderApp = (NextApp) => {
    ReactDOM.render(
        <App />, 
        document.getElementById('app')
    );
}

renderApp(App)

if(module.hot){
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        renderApp(NextApp)
    })
}