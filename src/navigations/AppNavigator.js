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
import ProductDetail from '../screens/productDetail';
import  Booking  from '../screens/booking';
import Authentication  from '../screens/authentication';
import  Report  from '../screens/report';


export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Authentication">
      <Stack.Screen name = "Authentication" component = {Authentication} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Report" component={Report} />


    </Stack.Navigator>
  );
}
