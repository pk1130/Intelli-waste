import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  CameraScreen from "./CameraScreen";
import  Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./Signup";


const Stack = createStackNavigator();


const App  = () => {
  const [user, setUser] = useState(null)
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="SignUp"  >

         {
           (user === null ) ? (
             <>
            <Stack.Screen name = "SignUp" component = {SignUp} initialParams = {{user: user, 'setUser': setUser}} />
            <Stack.Screen name = "Login" component = {Login} initialParams = {{user: user, 'setUser': setUser}} />
            </>
           ): (
             <>
            <Stack.Screen name="Dashboard" component={Dashboard} initialParams = {{user, setUser}} />
            <Stack.Screen name="Camera" component= {CameraScreen} initialParams = {{user, setUser}} />
            </>
           )        
          
         }


      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
