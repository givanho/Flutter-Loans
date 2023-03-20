import Business from "./Business";
import LoanDisbursed from "./LoanDisbursed";
import React from 'react';
import { View, Text, Image ,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from "./Welcome";
import Personal from "./Personal";
import Details from "./Details";
import Header from "./header";
import { Ionicons } from '@expo/vector-icons';
import {vw, vh} from './MyDimensions'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: styles.tabBar,
      
    
       
        headerShown: false,
        headerStyle: {
          elevation:0,
         backgroundColor: '#224b5f',
         
          headerTransparent: false,
         headerBackVisible: false,
        
        },
        title:'Loan',
        headerLayoutPreset: 'center',
       headerShadowVisible: false,
       
     }} > 
      <Tab.Screen name="Loan_T" component={Header} options={{
       
       headerShown: false,
       headerStyle: {
         elevation:0,
        backgroundColor: '#000',
         headerTransparent: false,
        headerBackVisible: false,
       },
       tabBarIcon:  ({ color, size ,focused}) => (
        <Image
      source={focused ? require('../assets/homey.png') : require('../assets/home.png')}
      style={{ width: vh * 0.035, height: vh * 0.035,marginTop:vh * 0.020 }}
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
      style={{ width: vh * 0.035, height: vh * 0.035,marginTop:vh * 0.020,   }}
    />),
       title:'',
       headerLayoutPreset: 'center',
       headerShadowVisible: false,
      
      
     }}/>
     
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    height: vh * 0.065,
    backgroundColor:'#f5f5f5'
     // set the height to 80
  },
});