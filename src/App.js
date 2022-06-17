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
 
 export default function App() {
 
   return (
    <NavigationContainer>
     <AppStack />
    </NavigationContainer>
   );
 };
 
 
 
 