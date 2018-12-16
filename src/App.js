import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBmIMffE0xMvs78rlAyx2IJmVJMYMgT3mE',
            authDomain: 'manager-e423c.firebaseapp.com',
            databaseURL: 'https://manager-e423c.firebaseio.com',
            projectId: 'manager-e423c',
            storageBucket: 'manager-e423c.appspot.com',
            messagingSenderId: '906680478695'
          };
          firebase.initializeApp(config);
    }

    render() {
        const initState = {};
        const store =  createStore(reducers,initState,applyMiddleware(ReduxThunk))
        return (
        <Provider store={store}>
            <RouterComponent/>
        </Provider>
        );
    }
}

export default App;

