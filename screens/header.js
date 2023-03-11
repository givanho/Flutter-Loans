import * as React from 'react';
import { View, Text , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import  Personal from '../screens/Personal'
import  Business from '../screens/Business'
import flutterBank from '../contest/flutterBank';
import DropdownComponent from '../contest/flutterBank'
import AccountNumber from '../contest/number';
import Pickers from '../contest/picker';
import LoanSummary from '../screens/Summary';
import LoanGranted from '../screens/LoanGranted';
import LoanDisbursed from '../screens/LoanDisbursed';
import BottomTabNavigator from '../screens/BottomTabNavigator';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


function Header() {
  
  return (
  
    
      <Stack.Navigator screenOptions={{
       
        headerShown: false,
        headerStyle: {
          elevation:0,
         backgroundColor: '#F5F5F5',
         
          headerTransparent: false,
         headerBackVisible: false,
        
        },
        title:'',
        headerLayoutPreset: 'center',
       
        headerShadowVisible: false,
       
       
      }}>
       
       
       <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="Personal" component={Personal} />
     <Stack.Screen name="FlutterBank" component={flutterBank} />
     <Stack.Screen name="DropDown" component={DropdownComponent} />
     <Stack.Screen name="AccountNum" component={AccountNumber} />
     <Stack.Screen name="Pick" component={Pickers} />
     <Stack.Screen name="Summary" component={LoanSummary} />
     <Stack.Screen name='Granted' component={LoanGranted} />
     <Stack.Screen name='Disbursed' component={LoanDisbursed} />

      </Stack.Navigator>
      
    
    
  )

}

export default Header;

