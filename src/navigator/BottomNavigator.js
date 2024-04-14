import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../theme/color';
import style from '../theme/style';

import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import LeaderB from '../screens/LeaderB/LeaderB';
import Search from '../screens/Search/Search';
import CQuiz from '../screens/CQuiz/CQuiz';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70, backgroundColor: '#FFFFFF', borderTopColor: Colors.bord, paddingBottom: 8 },
        tabBarShowLabel: false,

      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t1f.png') : require('../../assets/image/t1.png')} resizeMode='stretch'
              style={{ height: 26, width: 26, marginTop: 5 }} />
          },

          headerShown: false,
        }}
      />

      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t2f.png') : require('../../assets/image/t2.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 5,}} />
          },

          headerShown: false,
        }} />

      <Tab.Screen name="CQuiz" component={CQuiz}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t5.png')} resizeMode='stretch' style={{ height: 120, width: 120,marginTop:-60}}></Image>
          },
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }} />

      <Tab.Screen name="LeaderB" component={LeaderB}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t3f.png') : require('../../assets/image/t3.png')} resizeMode='stretch'
              style={{ height: 26, width: 26, marginTop: 5 }} />
          },

          headerShown: false,
        }} />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t4f.png') : require('../../assets/image/t4.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 5 }} />
          },

          headerShown: false,
        }} />


    </Tab.Navigator>
  );
}


