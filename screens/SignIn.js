import { StyleSheet, View,Text, Pressable ,ScrollView, TextInput, Image,TouchableWithoutFeedback} from 'react-native'
import {  getDoc, doc, } from "firebase/firestore"; 
import { db , users} from "../firebase"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from "react";
import { UserAuth } from "../contest";
import { useFonts } from 'expo-font';
import Lottie from 'lottie-react-native';
import {auth} from "../firebase"
import {vw, vh} from './MyDimensions'




const Stack = createNativeStackNavigator();
const SignIn = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {signIn} = UserAuth();
  const [events, setEvents] = useState(false);
  const { user, logout} = UserAuth();
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(true);

const useree = auth.currentUser
  const [fontsLoaded] =useFonts({
    'Poppins-SemiBold':require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular':require('../assets/fonts/Poppins-Regular.ttf'),
  });
 
 
  

  const handleSubmit = async (e) => {
     e.preventDefault()
     setError(null)
    
     
     try {
      setIsLoading(true);
         await signIn(email, password)
         
}
 
        // navigation.navigate("Welcome");
         
      catch (e) {
         setError(e.message) 
         
         console.log(e.message)
         setIsLoading(false);

        
     }

    
     
    
 }

const runner = async () =>{  
   const docRef = doc(db, "users",user.email || user.phoneNumber);
 const docSnap = await getDoc(docRef);
 
 if (docSnap.exists()) {
   console.log("Document data:", docSnap.data());
   navigation.navigate("Welcomed");
 } else {
   // doc.data() will be undefined in this case
   console.log("No such document!");
   navigation.navigate("profile");
 }

  
}

 useEffect(() => {
  if(user !==null){
     runner()
  }
  
   }, [user])

  return (
    <ScrollView style={{display: 'flex',width:'100%', alignSelf:"center",alignContent:"center",
          }}
          showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    

    
        <View style={styles.svg}>
          <Image  source={require('../assets/Mobileloginpana.png')}
          style={{ width: 0.41*vw, height: 0.22*vh ,marginTop:"15%"}} />
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
      <View style={styles.TextInput}>
          <View style={{display: 'flex',
          flexDirection: 'row', justifyContent:'center', alignItems:"center",width:'95%', marginLeft:vw * 0.020}}>
            <Image  source={require('../assets/padlocked.png')}
          style={{ width: vw * 0.060, height: vh * 0.033 }} />

<TextInput style={styles.TextInputed} placeholder='Password'placeholderTextColor={"#686868"}
     autoCapitalize="none"
     autoCompleteType="off"
     autoCorrect={false}
     secureTextEntry={showPassword}
     onChangeText={(text) => setPassword(text) }>

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
   

{error && <Text style={styles.error}>{error}</Text>}
   
    <Text style={{fontSize:  vw * 0.035,
    fontFamily:'Poppins-Regular',
    
    color:'#224b5f', }}>
        Forgotten Password? {' '}
        <Text
          style={{color: '#F44336', textDecorationLine: "underline"}}
          onPress={() => {
            navigation.navigate('Password');
          }}>
          Click Here
        </Text>
        </Text>
    <Pressable style={styles.button} onPress={handleSubmit} >
    {!isLoading ? (
          <Text style={{fontSize: vw * 0.045,
    color:"#FFF",
    fontFamily:'Poppins-SemiBold',}}>  Sign In </Text>
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
  export default SignIn

  const styles = StyleSheet.create({
    container: {
      
      color: '#01566F',
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      height:"100%",
      width:"100%"
     
  
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
      
      
    }
  });
  