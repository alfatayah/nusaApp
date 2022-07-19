import * as React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../screens/login';
import Home from '../screens/home';
import  Register  from '../screens/register';


export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="Register" component={Register} />


    </Stack.Navigator>
  );
}
