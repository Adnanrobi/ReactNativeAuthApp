import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen  from './src/screens/SignUpScreen';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name='Home' component={HomeScreen}/>
    </HomeStack.Navigator>
  )
}

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName='SignIn'>
      <AuthStack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}} />
    </AuthStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackScreen /> */}
      <AuthStackScreen/>
    </NavigationContainer>
  )
}

export default App