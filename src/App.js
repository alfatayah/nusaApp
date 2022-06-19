/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import { AppStack } from './navigations/AppNavigator';
 import { NavigationContainer } from '@react-navigation/native';
 import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './store/store';

 export default function App() {
 
   return (
     <Provider store={store} >
      <NativeBaseProvider>
         <NavigationContainer>
           <AppStack />
         </NavigationContainer>
         </NativeBaseProvider>
      </Provider>
   );
 };
 
 
 
 