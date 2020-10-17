import React from 'react'
import ReactDOM from 'react-dom'
import {store} from './store'
import {Provider} from 'react-redux'
import App from './components/App'

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('app')
    );
}

