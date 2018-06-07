import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import DiaryApp from './reducers.js'
import './index.css';
import App from './App';
import { loadState, saveState } from './middleware/localStorage'
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();
const store = createStore(DiaryApp, persistedState,
    composeWithDevTools(
)
);

store.subscribe(() => {
    saveState(store.getState());
})

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
