import { StyleSheet, View,Text, Pressable ,ScrollView, TextInput, Image,TouchableOpacity} from 'react-native'
import {  getDoc, doc, } from "firebase/firestore"; 
import { db , users} from "../firebase"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from "react";
import { UserAuth } from "../contest";
import { useFonts } from 'expo-font';
import Lottie from 'lottie-react-native';




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
   
    <ScrollView style={{paddingTop: '30%'}}>
    <View style={styles.container}>
      
    
        <View style={styles.svg}>
          <Image  source={require('../assets/Resetpassword-pana.png')}
          style={{ width: 250, height: 150 }} />
        </View>

        <View style={styles.TextInput}>
          <View style={{display: 'flex',
          flexDirection: 'row', justifyContent:'center'}}>
            <Image  source={require('../assets/person.png')}
          style={{ width: 30, height: 30 }} />

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
          <Text style={{fontSize: 16,
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
    
          <Text style={{fontSize: 16,
    color:"#FFF",
    fontFamily:'Poppins-SemiBold',}}>  Sign In </Text>
       
        
  </TouchableOpacity>
    <Text style={{fontSize: 18,
    fontFamily:'Poppins-Regular',
    
    color:'#515151', marginTop: 30}}>
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
    
      fontSize: 11,
      fontFamily:'Poppins-Regular',
      
      color:'red',
      alignItems: 'center',
      textAlign:'center',
     
      
    },
    success:{
    
        fontSize: 14,
        fontFamily:'Poppins-Regular',
        
        color:'green',
        alignItems: 'center',
        textAlign:'center',
       
        
      },
    textHeading:{
      color:'#22292F',
      fontSize: 19, 
      narginBottom: 5,
      fontFamily:'Poppins-SemiBold', 
      paddingTop:10,
      alignItems: 'center',
      textAlign:'center'
      
    },
    textParagraph:{
      
      fontSize: 15,
      fontFamily:'Poppins-Regular',
      
      color:'#515151',
      alignItems: 'center',
      textAlign:'center',
      paddingBottom: 10
      
    },
    TextInput:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      height:50,
      width: '85%',
      fontSize: 16,
      fontFamily:'Poppins-Regular',
      borderWidth: 1.5,
     borderRadius: 18,
      borderColor: "#224b5f",
      backgroundColor:"#eee",
      alignItems: "center",
      textAlign:"center",
      color:"#22292F"
      
    },
    TextInputed:{
     
      fontSize: 16,
      fontFamily:'Poppins-Regular',
      width: '85%',
     justifyContent:'center',
      backgroundColor:"#eee",
      alignItems: "center",
      textAlign:"center",
      color:"#22292F"
      
    },
    button:{
      marginTop: 10,
      height:45,
      width: '85%',
      
     borderRadius: 15,    
      backgroundColor:"#f44336",
      alignItems: "center",
      justifyContent:"center",
      textAlign:"center",
      
    },
    buttoon:{
      marginTop: 10,
      height:55,
      width: '85%',
      
     borderRadius: 15,    
      backgroundColor:"#224b5f",
      alignItems: "center",
      justifyContent:"center",
      textAlign:"center",
      
    }
  });
  