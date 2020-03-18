import { createStore,
    applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import reducerRegistry from '../../services/reducer-registry/reducerRegistry';
import '../reducers';

// This function is just for creating the _store. It is good to be a function cos can be used for instance in tests
const configureStore = (initialState, history = createBrowserHistory()) => {
    const composeEnhancers = composeWithDevTools({
        name: 'app-covid-19',
        maxAge: 6,
        shouldCatchErrors: true,
        serialize: false,
    });

    // Preserve initial state for not-yet-loaded reducers
    const combine = (reducers) => {
        const reducersLocal = reducers;
        const reducerNames = Object.keys(reducersLocal);
        if (initialState) {
            Object.keys(initialState).forEach((item) => {
                if (reducerNames.indexOf(item) === -1) {
                    reducersLocal[item] = (state = null) => state;
                }
            });
        }
        return combineReducers(reducersLocal);
    };
    // const reducer = combine(reducerRegistry.getReducers());
    const reducer = combine(reducerRegistry.getReducers());

    const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));

    // Replace the _store's reducer whenever a new reducer is registered.
    reducerRegistry.setChangeListener((reducers) => {
        store.replaceReducer(combine(reducers));
        store.dispatch({ type: '' });
    });
    return store;
};

export default configureStore;
