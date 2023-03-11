import { StyleSheet, View,Easing, Animated,Text, Pressable , Linking, TextInput,
  Platform, StatusBar, Image, ScrollView,KeyboardAvoidingView, TouchableOpacity, ActivityIndicator,TouchableWithoutFeedback} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState, useCallback, useRef, useEffect } from "react";
import { UserAuth } from "../contest";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Lottie from 'lottie-react-native';

import 'react-native-reanimated'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import PhoneSignUp from './PhoneSignUp';
import { set } from 'react-native-reanimated';








const Tab = createBottomTabNavigator()
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();


const Home = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password1, setPassword1] = useState("")
  const [error, setError] = useState("")
  const {createUser} = UserAuth();
  const [checked, setChecked] = useState();
  const [headerShown, setHeaderShown] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);
  const [vissible, setVissible]= useState(true)
  const [fontsLoaded] =useFonts({
    'Poppins-SemiBold':require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular':require('../assets/fonts/Poppins-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async() =>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if(!fontsLoaded){
    return null;
  }
  onLayoutRootView()
 
  // const clicking=()=>{
  //   if (vissible == true){
  //     setHeaderShown(true)
  //   }
  //   else if (vissible == false){
  //     setHeaderShown(false);
  //   }
  // }
   const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')
     
      try {
        setIsLoading(true);
        if(password1 === password){
           await createUser(email, password)
          
          navigation.navigate("profile");
          setIsLoading(false);
        }
         else{
          
          setError('passwords do not match')
          setIsLoading(false);
         }
      } catch (e) {
          setError(e.message) 
          setIsLoading(false);
          console.log(e.message)
         
      }
  }

  return (
   
    

   
      <View style={styles.container}>
        

      

      
        <View style={styles.svg}>
          <Image  source={require('../assets/Signuppana.png')}
          style={{ width: 180, height: 150 }} />
        </View>
     
<ScrollView style={{display: 'flex', flexDirection: 'column', 
      width: '85%', height:'100%', backgroundColor:"#eee", marginBottom:15, alignContent:'center'}}>

        <View >

          <View>
      
            <Text style={styles.textHeading} > Welcome To Flutter Loans</Text>
            
          </View>
          <View>
          <TouchableOpacity style={{width:'50%',borderTopRightRadius:50, borderBottomRightRadius:50 }} onPress={() => navigation.navigate('Payment')}><Text>
            hello
            </Text>
             </TouchableOpacity>
          </View>
          
        <View>
            <Text style={styles.textParagraph}>
              
             Borrow up to ₦5 Million Naira Business Loans and Personal Loans as high as{'\n'} ₦1 Million Naira. Sign up to get started
            </Text>
          </View>
        </View>
        <View style={{display:'flex', flexDirection:'column', width:'100%',alignItems:'center',alignContent:'center'}}>
              <Text style={styles.textHeading}>
                Sign up with
              </Text>

              <View style={{display:'flex', flexDirection:'row', width:'100%',borderColor:'#224b5f',
              borderRadius:13, borderWidth:1 , justifyContent:'center',alignItems:'center'}}>
 <TouchableOpacity style={{width:'50%',borderTopRightRadius:50, borderBottomRightRadius:50 }} onPress={() => setVissible(true)}>
  {vissible ? <View style={{backgroundColor:'#224b5f', width:'100%',alignItems:'center',borderBottomLeftRadius:12, borderTopLeftRadius:12}} >
                      
                      <Text style={{color:'#ffffff',alignItems:'center',fontSize: 16, marginBottom:4,marginTop:4,justifyContent:'center',
                                      
                                      fontFamily:'Poppins-SemiBold', }}>
                  Email
                </Text>
                      </View> : <View style={{backgroundColor:'#eee', width:'100%',alignItems:'center',borderBottomLeftRadius:12, borderTopLeftRadius:12}} >
                      
                      <Text style={{color:'#22292F',alignItems:'center',fontSize: 16, marginBottom:4,marginTop:4,justifyContent:'center',
                                      
                                      fontFamily:'Poppins-SemiBold', }}>
                  Email
                </Text>
                      </View>}
        
                    
                    
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#eee', position:'absolute', height:40, width:'12%', borderRadius:50,zIndex:9999,
                     alignContent:'center', alignItems:'center',alignSelf:'center', justifyContent:'center', borderColor:'#f44336', borderWidth:2}}>
                      <Text style={{color:'#22292F',alignItems:'center',fontSize: 15, marginBottom:4,marginTop:4,justifyContent:'center',
                                      
                                      fontFamily:'Poppins-SemiBold',}}>Or</Text>
                    </View>
       
 <TouchableOpacity style={{width:'50%'}} onPress={() => setVissible(false)}>
 {vissible ? <View style={{backgroundColor:'#eee', width:'100%',alignItems:'center',justifyContent:'space-evenly',borderBottomRightRadius:12, borderTopRightRadius:12}} >
                      
                      <Text style={{color:'#22292F',alignItems:'center',fontSize: 16, marginBottom:4,marginTop:4,justifyContent:'center',
                                      
                                      fontFamily:'Poppins-SemiBold', }}>
                  Phone
                </Text>
                      </View> : <View style={{backgroundColor:'#224b5f', width:'100%',alignItems:'center',borderBottomRightRadius:12, borderTopRightRadius:12}} >
                      
                      <Text style={{color:'#fff',alignItems:'center',fontSize: 16, marginBottom:4,marginTop:4,justifyContent:'center',
                                      
                                      fontFamily:'Poppins-SemiBold', }}>
                  Phone
                </Text>
                      </View>}
                    
                    </TouchableOpacity>
              </View>
        </View>
       
        {vissible ? <>
          <View style={styles.TextInput}>
          <View style={{display: 'flex',
          flexDirection: 'row', justifyContent:'center'}}>
            <Image  source={require('../assets/person.png')}
          style={{ width: 30, height: 30 }} />

          <TextInput  style={styles.TextInputed} placeholder={'Email'} placeholderTextColor={"#686868"} 
       autoCapitalize="none"
       autoCompleteType="off"
       autoCorrect={false}
       keyboardType="email-address"
      onChangeText={(text) => setEmail(text)} >

      </TextInput>
          </View>
        
        </View>
      
     
      <View style={styles.TextInput}>
          <View style={{display: 'flex',
          flexDirection: 'row', justifyContent:'center',width:'95%', marginLeft:10}}>
            <Image  source={require('../assets/padlocked.png')}
          style={{ width: 22, height: 22 }} />

<TextInput style={styles.TextInputed} placeholder='Password'placeholderTextColor={"#686868"}
      autoCapitalize="none"
      autoCompleteType="off"
      autoCorrect={false}
      secureTextEntry={showPassword1}
      onChangeText={(text) => setPassword(text)}>

      </TextInput>
      <View>
        <TouchableWithoutFeedback onPress={() => setShowPassword1(!showPassword1)}>
         
        <View>{showPassword1 ?<Image source={require('../assets/hide.png')}
          style={{ width: 22, height: 22 }} /> :<Image  source={require('../assets/view.png')}
          style={{ width: 22, height: 22 }} />}</View> 
          </TouchableWithoutFeedback>
      
      </View>
          </View>
        
        </View>
      
      
      <View style={styles.TextInput}>
          <View style={{display: 'flex',
          flexDirection: 'row', justifyContent:'center',width:'95%', marginLeft:10}}>
            <Image  source={require('../assets/padlocked.png')}
          style={{ width: 22, height: 22 }} />

<TextInput style={styles.TextInputed} placeholder='Re-enter Password'placeholderTextColor={"#686868"}
      autoCapitalize="none"
      autoCompleteType="off"
      autoCorrect={false}
      secureTextEntry={showPassword}
      onChangeText={(text) => setPassword1(text)}>

      </TextInput>
      <View>
        <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
         
        <View>{showPassword ?<Image source={require('../assets/hide.png')}
          style={{ width: 22, height: 22 }} /> :<Image  source={require('../assets/view.png')}
          style={{ width: 22, height: 22 }} />}</View> 
          </TouchableWithoutFeedback>
      
      </View>
          </View>
        
        </View>
     
      {error &&  <Text style={{fontSize: 12,
    fontFamily:'Poppins-Regular',
    
    color:'#F44336', }}>
        {error}
        
        </Text>}
     

       
      <Pressable style={styles.button} onPress={handleSubmit}>
        {!isLoading ? (
          <Text style={{fontSize: 16,
    color:"#FFF",
    fontFamily:'Poppins-SemiBold',}}>  Sign Up </Text>
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

      
    </Pressable>
    </> : <View style={{width: '100%'}}><PhoneSignUp navigation = {navigation} /></View>
          
        
        }
       
       
    
      <Text style={{ fontSize: 15,
    fontFamily:'Poppins-Regular',
    alignText:'center', alignSelf:'center',
    color:'#515151', marginTop: 30}}>
          Already have an account? {' '}
          <Text
            style={{color: '#F44336', textDecorationLine: "underline"}}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            Sign In
          </Text>
          
        </Text>
        </ScrollView>

    </View>
   
    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#01566F',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
   
   

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
    paddingBottom: 10
    
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
