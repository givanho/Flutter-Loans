import Business from "./Business";
import LoanDisbursed from "./LoanDisbursed";
import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from "./Welcome";
import Personal from "./Personal";
import Details from "./Details";
import Header from "./header";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
function CustomTabIcon({ focused }) {
  const handleClick =() =>{
    let Icon;

  }
  return (
    <Image
      source={focused ? require('../assets/home.png') : require('../assets/home.png')}
      style={{ width: 34, height: 34 }}
    />
  );
}
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator 
    
      
    options={{
       
        headerShown: false,
        headerStyle: {
          elevation:0,
         backgroundColor: '#224b5f',
         
          headerTransparent: false,
         headerBackVisible: false,
        
        },
        title:'',
        headerLayoutPreset: 'center',
       headerShadowVisible: false,
       
       
     }} > 
      <Tab.Screen name="Loan_T" component={Header} options={{
       
       headerShown: false,
       headerStyle: {
         elevation:0,
        backgroundColor: '#fff',
        
         headerTransparent: false,
        headerBackVisible: false,
        
       },
       tabBarIcon:  ({ color, size ,focused}) => (
        <Image
      source={focused ? require('../assets/homey.png') : require('../assets/home.png')}
      style={{ width: 32, height: 30 }}
    />),
       title:'',
       
         
      
     }} />
      <Tab.Screen name="Details_Tab" component={Details} options={{
       
       headerShown: false,
       headerStyle: {
         elevation:0,
        backgroundColor: '#224b5f',
        
         headerTransparent: false,
        headerBackVisible: false,
       
       },
       tabBarIcon:  ({ color, size ,focused}) => (
        <Image
      source={focused ? require('../assets/bluefill.png') : require('../assets/usecase.png')}
      style={{ width: 32, height: 30 }}
    />),
       title:'',
       headerLayoutPreset: 'center',
       headerShadowVisible: false,
      
      
     }}/>
     
    </Tab.Navigator>
  );
}
