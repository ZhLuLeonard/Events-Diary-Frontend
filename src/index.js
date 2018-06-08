import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './reducers.js'
import './index.css';
import AppContainer from './containers/AppContainer';
import { loadState, saveState } from './middleware/localStorage'
import registerServiceWorker from './registerServiceWorker';
import {event1, event2} from './Abstract/Mock'

const persistedState = loadState();
const store = createStore(combineReducers, persistedState,
    composeWithDevTools(
)
);

store.subscribe(() => {
    saveState(store.getState());
})

ReactDOM.render(
    <Provider store = {store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
