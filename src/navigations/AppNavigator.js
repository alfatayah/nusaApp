import * as React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../screens/login';
import Home from '../screens/home';


export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
