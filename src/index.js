import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducers from './reducers.js'
import './index.css';
import AppContainer from './containers/AppContainer';
import { loadState, saveState } from './middleware/localStorage'
import registerServiceWorker from './registerServiceWorker';
import {event1, event2} from './Abstract/Mock'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
let _ = require('underscore')

const persistedState = loadState();
const store = createStore(combinedReducers, persistedState,
    composeWithDevTools(
        applyMiddleware(logger)
)
);

store.subscribe(() => {
    _.throttle(saveState(store.getState()),100);
})

ReactDOM.render(
    <Provider store = {store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
