import React, { useEffect} from "react";
import { Dimensions, Image} from 'react-native';
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

  const vw = Dimensions.get('window').width;
  const vh = Dimensions.get('window').height;
  const logout = () => {
    return signOut(auth);
    
  };
  useEffect(() => {
    // This function will be executed only on app launch
    logout()
  
  }, []);
  

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
        title:null,
        headerLayoutPreset: 'center',
        headerLeft: () => <Image  source={require('./assets/flutterrebrand.png')}
        
        style={{ width: 0.43 * vw, height: 0.07 * vh, alignSelf: 'center', alignItems: 'center', justifyContent: 'center',marginLeft: vw /4.3}} />,
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
        
        style={{ width: 0.43 * vw, height: 0.07 * vh, alignSelf: 'center', alignItems: 'center', justifyContent: 'center',marginLeft: vw /4.3}} />,
        headerShadowVisible: false,
       
       
      }} />
      <Stack.Screen name="Details" component={Details} />
      
  
       
     
   
  
      </Stack.Navigator>
    </AuthContextProvider>
      
    </NavigationContainer>
   

    
  )

}
export default App;

