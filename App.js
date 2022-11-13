import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import {connect, Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './redux/reducers'
import ReceiptList from "./components/receiptList";
import {useState} from "react";
import thunk from "redux-thunk";
import MyButton from './components/MyButton';
import {getAllReceipts} from "./redux/actions";
import MainWrapper from "./mainWrapper";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const App = (props) => {

    return (
        <Provider store={store}>
            <MainWrapper/>

        </Provider>
    );
}


export default App;
