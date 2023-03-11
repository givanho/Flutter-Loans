import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View,Easing, Animated,Text, Pressable , Linking, TextInput, Button,
  Platform, StatusBar, Image, ScrollView,KeyboardAvoidingView,Alert, TouchableOpacity, ActivityIndicator,TouchableWithoutFeedback} from 'react-native'
  import { db , users} from "../firebase"
  import {  getDoc, doc, } from "firebase/firestore"; 

import { UserAuth } from '../contest';
import Lottie from 'lottie-react-native';
import parsePhoneNumber from 'libphonenumber-js'


const PhoneSignup = ({navigation}) => {
  const { sendVerificationCode, verifyVerificationCode,isLoading, setIsLoading,info ,
    user, verificationId,setVerificationId,logout,setErrorInfo, errorinfo} = UserAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
const [realError, setRealError] = useState('');

  
  
 
  const handleSendVerificationCode = async() => {
    sendVerificationCode(phoneNumber);
    
  errorinfo
  console.log('beware '+errorinfo)
  };
  
  useEffect(() => {
    
      }, [errorinfo])

  const handleVerifyVerificationCode = async() => {
    verifyVerificationCode(verificationCode)
     
  };
 
 
  
  return (
    <View>
          
      { // show the phone number input field when verification id is not set.
        !verificationId && (
          <View style={{width:'100%',alignItems:'center'}}> 
                 <View style={styles.TextInput}>
          <View style={{display: 'flex',
          flexDirection: 'row', justifyContent:'center'}}>
            <Image  source={require('../assets/person.png')}
          style={{ width: 30, height: 30 }} />

      <View style={{display: 'flex', width:'35%',paddingLeft:15,
          flexDirection: 'row', justifyContent:'space-between',}}>
      <Image  source={require('../assets/nigeria.png')}
          style={{ width: 30, height: 30 }} />
      <Text style={styles.TextInputed} >+234 </Text>
      </View>
<View style={{width:'50%',
           borderLeftWidth:1.2,borderColor:'#333',paddingLeft:1,alignSelf:'center',
           }}>
          <TextInput  style={styles.TextInputer} 
          placeholder={'Phone Number'} 
          placeholderTextColor={"#686868"} 
          autoCompleteType="tel"
          autoCorrect={false}
         
         keyboardType='phone-pad'
         textContentType='telephoneNumber'
         onChangeText={ (phoneNumber) => setPhoneNumber(phoneNumber)}>
      </TextInput>
      </View>
          </View>
          <View>
         
          </View>
                 
                
        
            </View>
            {
        errorinfo && <Text style={styles.error}>{errorinfo}</Text> 
    }
            <TouchableOpacity style={styles.button} onPress={ () => handleSendVerificationCode()}
                        title= "Send Verification Code"
                        disabled={!phoneNumber} >
        {!isLoading ? (
            <Text style={{fontSize: 16,
        color:"#FFF",
        fontFamily:'Poppins-SemiBold',}}>  Submit </Text>
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
 
            </View>
        )
        
    }
    {/* ended */}
    { // if verification id exists show the confirm code input field.
        verificationId && (
            <View style={{width:'100%',alignItems:'center'}}>
                <Text style={styles.textParagraph}>Enter the verification code</Text>
            <View style={styles.TextInput}>
                <TextInput style={styles.TextInputed}
                    editable={!!verificationId}
                    placeholder= "OTP Code"
                    autoCompleteType="tel"
                    autoCorrect={false}
                    keyboardType='phone-pad'
                    textContentType='telephoneNumber'
                    onChangeText={setVerificationCode}
                />
                
            </View>
            {
        errorinfo && <Text style={styles.error}>{errorinfo}</Text> 
    }
            <TouchableOpacity style={styles.button} 
                    title= "Confirm Verification Code"
                    disabled={!verificationCode}
                    onPress = {() => handleVerifyVerificationCode()}>
    {!isLoading ? (
          <Text style={{fontSize: 16,
    color:"#FFF",
    fontFamily:'Poppins-SemiBold',}}>  Confirm Code </Text>
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
           
                
            </View>
            
        )
    }
    </View>
   
  );
};

export default PhoneSignup;
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
   marginBottom: -5,
   marginTop: 8,

    
  },
  success:{
    
    fontSize: 11,
    fontFamily:'Poppins-Regular',
    
    color:'green',
    alignItems: 'center',
    textAlign:'center',
    paddingBottom: 10
    
  },
  error:{
    
    fontSize: 11,
    fontFamily:'Poppins-Regular',
    
    color:'red',
    alignItems: 'center',
    textAlign:'center',
   
    
  },
  TextInput:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    height:50,
    width: '100%',
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
  TextInputer:{
   
    fontSize: 16,
    fontFamily:'Poppins-Regular',
    width: '85%',
    alignSelf:'center',
   justifyContent:'center',
    backgroundColor:"#eee",
    
    color:"#22292F"
    
  },
  button:{
    marginTop: 10,
    height:45,
    width: '100%',
    
   borderRadius: 15,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    
  }
});