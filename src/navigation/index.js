import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import FundsHome from '../screens/FundsHome';
import SearchFunds from '../screens/Search';
import Profile from '../screens/Profile';
import FundDetails from '../screens/FundDetails';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return <MainStack />;
};
export default Navigation;

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={FundsHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchFunds}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FundDetail"
        options={{
          headerShown: false,
        }}
        component={FundDetails}
      />
    </Stack.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={FundsHome} />
      <Tab.Screen name="Search" component={SearchFunds} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};
