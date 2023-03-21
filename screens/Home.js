import { StyleSheet, View,Text, Pressable , TextInput,
   Image, ScrollView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState, useCallback, } from "react";
import { UserAuth } from "../contest";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Lottie from 'lottie-react-native';

import 'react-native-reanimated'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import PhoneSignUp from './PhoneSignUp';
import {vw, vh} from './MyDimensions'







const Tab = createBottomTabNavigator()
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();


const Home = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password1, setPassword1] = useState("")
  const [error, setError] = useState("")
  const {createUser} = UserAuth();
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
 const justclick = async () => {
  navigation.navigate("Disbursed");
 }

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
          style={{ width: 0.41*vw, height: 0.20*vh }} />
        </View>
     
<ScrollView style={{display: 'flex', flexDirection: 'column', 
      width: '85%', height:'100%', backgroundColor:"#F5F5F5", marginBottom:vh * 0.024, alignContent:'center'}}
      showsVerticalScrollIndicator={false}>

        <View >

          <View>
      
            <Text style={styles.textHeading} > Welcome To Flutter Loans</Text>
            
          </View>
       
          
        <View>
            <Text style={styles.textParagraph}>
              
            Sign Up or Sign In to get started! </Text>
          </View>

        </View>
        
          <Pressable style={styles.button} onPress={justclick}>
          <Text> hello </Text>
          </Pressable>
        <View style={{display:'flex', flexDirection:'column', width:0.85 * vw ,height:0.12 * vh,
        alignItems:'center',alignContent:'center'}}>
              <Text style={styles.textHeading}>
                Sign up with
              </Text>

              <View style={{display:'flex', flexDirection:'row', width:'100%',borderColor:'#224b5f',
              borderRadius:12, borderWidth:1.5 , justifyContent:'center',alignItems:'center'}}>
 <TouchableOpacity style={{width:'50%'}} onPress={() => setVissible(true)}>
  {vissible ? <View style={{backgroundColor:'#224b5f', width:'100%',alignItems:'center',
                                              borderBottomLeftRadius:vh * 0.012, borderTopLeftRadius:vh * 0.012}} >
                      
                      <Text style={{color:'#fff',alignItems:'center',fontSize: vw * 0.050, marginBottom:vh * 0.004,marginTop:vh * 0.004,
                                    justifyContent:'center',fontFamily:'Poppins-SemiBold'}}>
                  Email
                </Text>
                      </View> : <View style={{backgroundColor:'#eee', width:'100%',alignItems:'center',
                                              borderBottomLeftRadius:vh * 0.012, borderTopLeftRadius:vh * 0.012,marginLeft:vw * 0.004}} >
                      
                      <Text style={{color:'#22292F',alignItems:'center',fontSize: vw * 0.050, marginBottom:vh * 0.004,
                                    marginTop:vh * 0.004,justifyContent:'center',
                                      fontFamily:'Poppins-SemiBold',}}>
                  Email
                </Text>
                      </View>}
        
                    
                    
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#eee', position:'absolute', height:vh * 0.055, width:vh * 0.055, 
                                  borderRadius:vw * 0.050,zIndex:9999,
                     alignContent:'center', alignItems:'center',alignSelf:'center', justifyContent:'center',
                      borderColor:'#f44336', borderWidth:2}}>
                      <Text style={{color:'#22292F',fontSize: vw * 0.045, marginBottom:vh * 0.004,
                                  marginTop:vh * 0.004, fontFamily:'Poppins-SemiBold', alignContent:'center', 
                                  alignItems:'center',alignSelf:'center', justifyContent:'center',}}>Or</Text>
                    </View>
       
 <TouchableOpacity style={{width:'50%'}} onPress={() => setVissible(false)}>
 {vissible ? <View style={{backgroundColor:'#eee', width:'100%',alignItems:'center',marginLeft:vw * -0.003,
                            justifyContent:'space-evenly',borderBottomRightRadius:vh * 0.012, borderTopRightRadius:vh * 0.012}} >
                      
                      <Text style={{color:'#22292F',alignItems:'center',fontSize: vw * 0.050, marginBottom:vh * 0.004,
                                    marginTop:vh * 0.004,justifyContent:'center',
                                      fontFamily:'Poppins-SemiBold', }}>
                  Phone
                </Text>
                      </View> : <View style={{backgroundColor:'#224b5f', width:'100%',alignItems:'center',
                                              borderBottomRightRadius:vh * 0.012, borderTopRightRadius:vh * 0.012}} >
                      
                      <Text style={{color:'#fff',alignItems:'center',fontSize: vw * 0.050, marginBottom:vh * 0.004,marginTop:vh * 0.004,
                                    justifyContent:'center', fontFamily:'Poppins-SemiBold', }}>
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
          style={{ width: vw * 0.075, height: vh * 0.043 }} />

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
          <View style={{display: 'flex', alignItems: "center",
          flexDirection: 'row', justifyContent:'center',width:'95%', marginLeft:vw * 0.020}}>
            <Image  source={require('../assets/padlocked.png')}
          style={{ width: vw * 0.060, height: vh * 0.033 }} />

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
          style={{ width: vw * 0.060, height: vh * 0.020 }} /> :<Image  source={require('../assets/view.png')}
          style={{ width: vw * 0.060, height: vh * 0.020 }} />}</View> 
          </TouchableWithoutFeedback>
      
      </View>
          </View>
        
        </View>
      
      
      <View style={styles.TextInput}>
   
          <View style={{display: 'flex', alignItems: "center",
          flexDirection: 'row', justifyContent:'center',width:'95%', marginLeft:vw * 0.020}}>
            <Image  source={require('../assets/padlocked.png')}
          style={{ width: vw * 0.060, height: vh * 0.033 }} />

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
          style={{ width: vw * 0.060, height: vh * 0.020 }} /> :<Image  source={require('../assets/view.png')}
          style={{ width: vw * 0.060, height: vh * 0.020 }} />}</View> 
          </TouchableWithoutFeedback>
      
      </View>
          </View>
        
        </View>
     
      {error &&  <Text style={{fontSize: vw * 0.030,
    fontFamily:'Poppins-Regular',
    
    color:'#F44336', }}>
        {error}
        
        </Text>}
     

       
      <Pressable style={styles.button} onPress={handleSubmit}>
        {!isLoading ? (
          <Text style={{fontSize: vw * 0.045,
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
       
       
    
      <Text style={{ fontSize: vw * 0.045,
    fontFamily:'Poppins-Regular',
    alignText:'center', alignSelf:'center',
    color:'#515151', marginTop: vh * 0.020}}>
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
    
    marginBottom: 0.012*vh,
  },
  textHeading:{
    color:'#22292F',
    fontSize: vw * 0.050 , 
    marginBottom: -0.008*vh,
    fontFamily:'Poppins-SemiBold', 
    paddingTop:0.012*vh,
    alignItems: 'center',
    textAlign:'center'
    
  },
  textParagraph:{
    
    fontSize: vw * 0.035,
    fontFamily:'Poppins-Regular',
    
    color:'#515151',
    alignItems: 'center',
    textAlign:'center',
    paddingBottom: 0.015*vh
    
  },
  TextInput:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
