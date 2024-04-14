import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/color';

import Login from '../screens/Login/Login';
import Option from '../screens/Login/Option';
import Splash from '../screens/Splash';
import Introduction from '../screens/Introduction/Introduction';
import Reset from '../screens/Login/Reset';
import NewPass from '../screens/Login/NewPass';
import Signup from '../screens/Login/Signup';
import Email from '../screens/Login/Email';
import User from '../screens/Login/User';
import Pass from '../screens/Login/Pass';
import InviteF from '../screens/Profile/InviteF';
import Help from '../screens/Profile/Help';
import Faq from '../screens/Profile/Faq';
import Setting from '../screens/Profile/Setting';
import LeaderB from '../screens/LeaderB/LeaderB';
import Profile from '../screens/Profile/Profile';


import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import SQ from '../screens/Search/SQ';
import SQR from '../screens/Search/SQR';
import CQuiz from '../screens/CQuiz/CQuiz';
import CCategory from '../screens/CQuiz/CCategory';
import CQ4 from '../screens/CQuiz/CQ4';
import CQ5 from '../screens/CQuiz/CQ5';
import CQ6 from '../screens/CQuiz/CQ6';
import CQ7 from '../screens/CQuiz/CQ7';
import CQ8 from '../screens/CQuiz/CQ8';
import CQ9 from '../screens/CQuiz/CQ9';
import CQ10 from '../screens/CQuiz/CQ10';
import RQ from '../screens/CQuiz/RQ';
import QDetail from '../screens/QuizDetail/QDetail';
import QD1 from '../screens/QuizDetail/QD1';
import QDD1 from '../screens/QuizDetail/QDD1';
import QD2 from '../screens/QuizDetail/QD2';
import QD3 from '../screens/QuizDetail/QD3';
import QD4 from '../screens/QuizDetail/QD4';
import QD5 from '../screens/QuizDetail/QD5';
import QDD4 from '../screens/QuizDetail/QDD4';
import QDD41 from '../screens/QuizDetail/QDD41';
import QD6 from '../screens/QuizDetail/QD6';
import QD7 from '../screens/QuizDetail/QD7';
import QComplete from '../screens/QuizDetail/QComplete';
import Review from '../screens/QuizDetail/Review';

import MyTabs from './BottomNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);


  }, [])

  return (

    <NavigationContainer>

      <Stack.Navigator>

        {
          showSplashScreen ?
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }} />
            : null
        }

        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }} />
          
        <Stack.Screen
          name="Review"
          component={Review}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QComplete"
          component={QComplete}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QD7"
          component={QD7}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QD6"
          component={QD6}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="QD5"
          component={QD5}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QDD41"
          component={QDD41}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QDD4"
          component={QDD4}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QD4"
          component={QD4}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QD3"
          component={QD3}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QD2"
          component={QD2}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QDD1"
          component={QDD1}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QD1"
          component={QD1}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QDetail"
          component={QDetail}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="RQ"
          component={RQ}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQ10"
          component={CQ10}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQ9"
          component={CQ9}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQ8"
          component={CQ8}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQ7"
          component={CQ7}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQ6"
          component={CQ6}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQ5"
          component={CQ5}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQ4"
          component={CQ4}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CCategory"
          component={CCategory}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CQuiz"
          component={CQuiz}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="SQR"
          component={SQR}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="SQ"
          component={SQ}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="LeaderB"
          component={LeaderB}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Faq"
          component={Faq}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="InviteF"
          component={InviteF}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pass"
          component={Pass}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="User"
          component={User}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Email"
          component={Email}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Reset"
          component={Reset}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Option"
          component={Option}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}