/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import RootReducer from './src/storage/RootReducer';
const store=createStore(RootReducer)
function App(){

  
 return(
 <Provider store={store}>
  <RootNavigation/>
  </Provider>
 )
}


export default App;
