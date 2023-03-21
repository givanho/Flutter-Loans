import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from "./Welcome";
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
