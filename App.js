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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Nav_drawer({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed}/>
      <Drawer.Screen name="Search" component={Search}/>
      <Drawer.Screen name="Notifications" component={Notifications}/>
      <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
  );
}

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
          <Stack.Screen name="Drawer" component={Nav_drawer} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}