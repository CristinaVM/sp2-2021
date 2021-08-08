import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login';
import Register from './screens/Register';
import VerifyAccount from './screens/VerifyAccount';
import RecoveryMail from './screens/RecoveryMail';
import ChangePassword from './screens/ChangePassword';
import Feed from './screens/Feed';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Notifications from './screens/Notifications';
import Chats from './screens/Chats';
import Search_product from './screens/Search_product';
import Edit_profile from './screens/Edit_profile';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyAccount" component={VerifyAccount} options={{ headerShown: false }} />
          <Stack.Screen name="RecoveryMail" component={RecoveryMail} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
          <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
          <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Search_product" component={Search_product} options={{ headerShown: false }} />
          <Stack.Screen name="Edit_profile" component={Edit_profile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}