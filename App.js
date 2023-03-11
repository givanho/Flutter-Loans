import React, {useState, useEffect} from "react";
import { AppState, Subscription, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import { AuthContextProvider } from './contest';
import Profile from './screens/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Details from './screens/Details' ;
import  Personal from './screens/Personal'
import  Business from './screens/Business'
import flutterBank from './contest/flutterBank';
import DropdownComponent from './contest/flutterBank'
import AccountNumber from './contest/number';
import Pickers from './contest/picker';
import LoanSummary from './screens/Summary';
import MyComponent from './screens/Waiting';
import LoanGranted from './screens/LoanGranted';
import LoanDisbursed from './screens/LoanDisbursed';
import Headed from './screens/Headed';
import Free from './screens/free';
import ForgotPassword from "./screens/ForgotPassword";
import PaymentScreen from "./screens/flutter";
import {
  
  signOut,
  getAuth,
 
} from "firebase/auth";
import {getApp,initializeApp} from 'firebase/app';




const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


function App() {
  const apps = getApp();
  const auth = getAuth(apps);


  const logout = () => {
    return signOut(auth);
    
  };
  useEffect(() => {
    // This function will be executed only on app launch
    logout()
    console.log('App launched!');
  }, []);
  // useEffect(() => {
    // Add an event listener to AppState changes
   // AppState.addEventListener('change', handleAppStateChange);
  //  console.log('user just signed out appstate')
// logout()
    // Clean up the event listener on unmount
   // return () => {
    //  AppState.removeEventListener('change', handleAppStateChange);
   // };
  // }, []);

  // const handleAppStateChange = (nextAppState) => {
  //   if (nextAppState === 'background') {
  //     console.log('user just signed out appstate')

  //     logout()
  //   }
  // };

  return (
    
   
   
  
    <NavigationContainer>
     <AuthContextProvider >
      <Stack.Navigator screenOptions={{
       
        headerShown: true,
        headerStyle: {
          elevation:0,
         backgroundColor: '#F5F5F5',
         
          headerTransparent: false,
         headerBackVisible: false,
        
        },
        title:'',
        headerLayoutPreset: 'center',
        headerLeft: () => <Image  source={require('./assets/flutterrebrand.png')}
        
        style={{ width: 150, height: 37,alignSelf: 'center', alignItems: 'center', justifyContent: 'center',marginLeft:110}} />,
        headerShadowVisible: false,
       
       
      }}>
       
       
       <Stack.Screen name="Home" component={Home} />
       
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="Personal" component={Personal} />
     <Stack.Screen name="FlutterBank" component={flutterBank} />
     <Stack.Screen name="DropDown" component={DropdownComponent} />
     <Stack.Screen name="AccountNum" component={AccountNumber} />
     <Stack.Screen name="Pick" component={Pickers} />
     <Stack.Screen name="Summary" component={LoanSummary} />
     <Stack.Screen name='Waiting' component={MyComponent} />
     <Stack.Screen name='Granted' component={LoanGranted} />
     <Stack.Screen name='Disbursed' component={LoanDisbursed} />
     <Stack.Screen name='free' component={Free} />
     <Stack.Screen name='Password' component={ForgotPassword} />
      <Stack.Screen name='Payment' component={PaymentScreen} />

<Stack.Screen name='Welcomed' component={Headed}
   
      options={{
       
        headerShown: true,
        headerStyle: {
          elevation:0,
         backgroundColor: '#224b5f',
         
          headerTransparent: false,
         headerBackVisible: false,
        
        },
        title:'',
        headerLayoutPreset: 'center',
        headerLeft: () => <Image  source={require('./assets/flutterrebrandwhite.png')}
        
        style={{ width: 150, height: 37,alignSelf: 'center', alignItems: 'center', justifyContent: 'center',marginLeft:110}} />,
        headerShadowVisible: false,
       
       
      }} />
      <Stack.Screen name="Details" component={Details} />
      
  
       
     
   
  
      </Stack.Navigator>
    </AuthContextProvider>
      
    </NavigationContainer>
   

    
  )

}

export default App;

