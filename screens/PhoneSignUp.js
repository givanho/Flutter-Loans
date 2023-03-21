import React, { useState, useEffect,} from 'react';
import { StyleSheet, View,Text,  TextInput,
  Image,TouchableOpacity, } from 'react-native'
  import {vw, vh} from './MyDimensions'

import { UserAuth } from '../contest';
import Lottie from 'lottie-react-native';


const PhoneSignup = ({navigation}) => {
  const { sendVerificationCode, verifyVerificationCode,isLoading, setIsLoading,info ,
    user, verificationId,setVerificationId,logout,setErrorInfo, errorinfo} = UserAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  
  
 
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
          style={{width: vw * 0.075, height: vh * 0.043 }} />

      <View style={{display: 'flex', width:'35%',paddingLeft:15,
          flexDirection: 'row', justifyContent:'space-between',}}>
      <Image  source={require('../assets/nigeria.png')}
          style={{ width: vw * 0.075, height: vh * 0.043  }} />
      <Text style={styles.TextInputed} >+234 </Text>
      </View>
<View style={{width:'50%',
           borderLeftWidth:1,borderColor:'#333',paddingLeft:1,alignSelf:'center',
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
            <Text style={{fontSize: vw * 0.045,
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
          <Text style={{fontSize: vw * 0.045,
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
 
  textParagraph:{
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    color:'#515151',
    alignItems: 'center',
    textAlign:'center',
   marginBottom: -5,
   marginTop: 8,

    
  },
 
  error:{
    
    fontSize: vw * 0.030,
    fontFamily:'Poppins-Regular',
    
    color:'red',
    alignItems: 'center',
    textAlign:'center',
   
    
  },
  TextInput:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0.007*vh,
    height:0.065*vh,
    width: '100%',
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
  TextInputer:{
   
    fontSize: vw * 0.043,
    fontFamily:'Poppins-Regular',
    width: '85%',
    alignSelf:'center',
   justifyContent:'center',
    backgroundColor:"#eee",
    
    color:"#22292F"
    
  },
  button:{
    marginTop: 0.012*vh,
    height:0.065*vh,
    width: '100%',
    
   borderRadius: vw * 0.04,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center", 
  }
});