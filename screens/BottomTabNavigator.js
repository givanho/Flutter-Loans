import Business from "./Business";
import LoanDisbursed from "./LoanDisbursed";
import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,  } from '@expo/vector-icons';
import Welcome from "./Welcome";
import Personal from "./Personal";
import Details from "./Details";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Loan_Tab" component={Welcome}  />
      <Tab.Screen name="Details_Tab" component={Details} />
    </Tab.Navigator>
  );
}
