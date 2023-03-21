import { StyleSheet, View,Text,ScrollView, TextInput, Image,TouchableOpacity} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState} from "react";
import { UserAuth } from "../contest";
import { useFonts } from 'expo-font';
import Lottie from 'lottie-react-native';
import {vw, vh} from './MyDimensions'




const Stack = createNativeStackNavigator();
const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {forgotPassword} = UserAuth();
  const [events, setEvents] = useState(null);
  const { user, logout} = UserAuth();
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(true);


  const [fontsLoaded] =useFonts({
    'Poppins-SemiBold':require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular':require('../assets/fonts/Poppins-Regular.ttf'),
  });
  
  
  const handleSubmit = async (e) => {
     e.preventDefault()
     

    
     
     try {
      setIsLoading(true);
         await forgotPassword(email)
        setEvents("Recovery Password sent to your Email")
      setError(null)

         setIsLoading(false);

}

         
          
        // navigation.navigate("Welcome");
         
      catch (e) {
         setError(e.message) 
         setEvents(null)
         console.log(e.message)
         setIsLoading(false);

        
     }

     
     
    
 }
 

  return (
   
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      
    
        <View style={styles.svg}>
          <Image  source={require('../assets/Resetpassword-pana.png')}
          style={{ width: 0.51*vw, height: 0.27*vh ,marginTop:"5%" }} />
        </View>

        <View style={styles.TextInput}>
          <View style={{display: 'flex',
          flexDirection: 'row', justifyContent:'center'}}>
            <Image  source={require('../assets/person.png')}
          style={{ width: vw * 0.075, height: vh * 0.043 }} />

<TextInput style={styles.TextInputed} placeholder={'Email'} placeholderTextColor={"#686868"} 
    autoCapitalize="none"
    autoCompleteType="off"
    autoCorrect={false}
    keyboardType="email-address"
   onChangeText={(text) => setEmail(text)}>

    </TextInput>
          </View>
        
        </View>
      
      {/* Password  */}
     
      {/* Password  */}
     
{error && <Text style={styles.error}>{error}</Text>}
{events && <Text style={styles.success}>{events}</Text>}
   
   
    <TouchableOpacity style={styles.button} onPress={handleSubmit} >
    {!isLoading ? (
          <Text style={{fontSize:  vw * 0.045,
    color:"#FFF",
    fontFamily:'Poppins-SemiBold',}}>  Reset Password </Text>
        ):(
          <Lottie source={require('../assets/animation/isloading.json')}
        style={{width:'100%',alignItems:'center',alignContent:'center',alignSelf:'center',}}
        colorFilters={[
        {
          keypath: 'Shape Layer 1',
          color: '#224b5f',
        },
      ]}  autoPlay loop={true} />
        )}
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttoon} onPress={() => {
            navigation.navigate('SignIn');
          }} >
    
          <Text style={{fontSize:  vw * 0.045,
    color:"#FFF",
    fontFamily:'Poppins-SemiBold',}}>  Sign In </Text>
       
        
  </TouchableOpacity>
    <Text style={{fontSize:  vw * 0.045,
    fontFamily:'Poppins-Regular',
    alignText:'center', alignSelf:'center',
    color:'#515151', marginTop: vh * 0.020, marginBottom:vh * 0.08}}>
        Don't have an account? {' '}
        <Text
          style={{color: '#F44336', textDecorationLine: "underline"}}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Sign Up
        </Text>
        
      </Text>
  </View>
  </ScrollView>
  )}
  export default ForgotPassword

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: '#01566F',
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
     // top: StatusBar.currentHeight,
     
  
    },
    svg:{
     
      height: 'auto',
      width: 'auto',
      
      marginBottom: 15,
    },
    error:{
    
      fontSize:   vw * 0.035,
      fontFamily:'Poppins-Regular',
      
      color:'red',
      alignItems: 'center',
      textAlign:'center',
     
      
    },
    success:{
    
      fontSize:  vw * 0.035,
        fontFamily:'Poppins-Regular',
        
        color:'green',
        alignItems: 'center',
        textAlign:'center',
       
        
      },
    
  
    TextInput:{
      display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0.007*vh,
    height:0.065*vh,
    width: '85%',
    fontSize: vw * 0.045,
    fontFamily:'Poppins-Regular',
    borderWidth: 1.5,
   borderRadius: vw * 0.04,
    borderColor: "#224b5f",
    backgroundColor:"#eee",
    alignItems: "center",
    textAlign:"center",
    color:"#22292F"
    
      
    },
    TextInputed:{
     
      fontSize: vw * 0.045,
    fontFamily:'Poppins-Regular',
    width: '85%',
   justifyContent:'center',
    backgroundColor:"#eee",
    alignItems: "center",
    textAlign:"center",
    color:"#22292F"
    
      
    },
    button:{
      marginTop: 0.012*vh,
    height:0.065*vh,
    width: '85%',
    
   borderRadius: vw * 0.04,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",

      
    },
    buttoon:{
      marginTop: 0.012*vh,
    height:0.065*vh,
    width: '85%',
    
   borderRadius: vw * 0.04,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    
      backgroundColor:"#224b5f",
     
    }
  });
  