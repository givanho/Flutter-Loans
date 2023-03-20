import { StyleSheet, View, Text, Pressable , Linking, TextInput, ScrollView, TouchableOpacity, BackHandler,ImageBackground,
  StatusBar, Alert, Image} from 'react-native'
import React , {useEffect, useState} from 'react'
import { getFirestore, collection,setDoc, addDoc, getDocs, 
  doc, DocumentSnapshot, Firestore } from "firebase/firestore"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient';
import SlidingText from '../utils/SlidingText';
import {vw, vh} from './MyDimensions'

import { db } from "../firebase"
import {UserAuth} from "../contest"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();
const Welcome = ({navigation}) => {
  const textList = [' ₦1,000,000 Loan successfully disbursed to (002*****) ',
                    '₦4,200,000 Loan successfully disbursed to (081*****)', 
                    '₦80,000 Loan successfully disbursed to (801******) ',
                    '₦90,000 Loan successfully disbursed to (014****) ',
                    '₦30,000 Loan successfully disbursed to (044*****)',
                    '₦100,000 Loan successfully disbursed to (058*****)'];
  const { user, logout} = UserAuth();
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const backAction = async () => {
      try{
        navigation.navigate("Home");
        await logout()
    
        return true;

      }
      catch(error){
        console.log(error);
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  function getMovies(){
    if(user){
      try{  const movieCollectionRef = collection(db, user.email || user.phoneNumber)
        getDocs(movieCollectionRef)
        .then(response =>{
            
            const movs = response.docs.map(doc =>({
                data: doc.data(),
                id: doc.id,
                
        }))

        setMovies(movs)
        
       
        })}
        catch(err){
           
            console.log(err.message);
              }
    }
      
        
    }
    
    
    
    useEffect(() =>{
     
   
      getMovies()
    }, [user])
    
   

  return (
    
    <View style={styles.container}>
      <ScrollView style={{
        width: '100%',
        height: '100%',
        }}>



      <LinearGradient
        // Background Linear Gradient
        colors={[ '#224b5f','#2980b9',]}
        style={styles.upper}>
      
      <Image  source={require('../assets/patterns.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0,left:vw * 0.14}} />
           <Image  source={require('../assets/pencil.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.07,left:vw * 0.20}} />
<Image  source={require('../assets/paper-airplane.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.08,left:vw * 0.37}} />
          <Image  source={require('../assets/leaf.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.03,right:vw * 0.08}} />
          <Image  source={require('../assets/love.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.13,right:vw * 0.08}} />
          <Image  source={require('../assets/get-money.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.08,left:vw * 0}} />
          <Image  source={require('../assets/right-arrow-angle.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.15,left:vw * 0.20}} />
          <Image  source={require('../assets/laptop.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.10,right:vw * 0.25}} />
          <Image  source={require('../assets/bag.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',right:vw * 0.33}} />
          <Image  source={require('../assets/bulb.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.14,position:'absolute',top:vh * 0.20,left:vw * 0}} />
          <Image  source={require('../assets/deal.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.14,position:'absolute',top:vh * 0.24,left:vw * 0.57}} />
          <Image  source={require('../assets/chat-balloon.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.24,left:vw * 0.84}} />
          <Image  source={require('../assets/dollar-sign-inside-oval-shape.png')}
          style={{ width: vw * 0.15, height: vw * 0.15,opacity:0.07,position:'absolute',top:vh * 0.24,left:vw * 0.33}} />

<View style={{flexDirection:'row', justifyContent:'space-between', width: '85%', alignItems:'center', alignSelf:'center'}}>
  <View>
      {  movies.map((movie,idx) =>(
        
       
                    <Text style={{fontFamily:'Poppins-SemiBold',
    
                    color:'#fff',
                    alignItems: "flex-start",
                    textAlign:'left',
                     
                    fontSize: vw * 0.045,}} key={idx}>
                     Welcome, {'\n'+movie.data.firstName}
                      
                      </Text>))}
                      </View>
                      <View style={{ borderRadius:50, borderColor:'#fff',width: vw * 0.090, height: vw * 0.090, borderWidth:1.5,
                       justifyContent:'center', alignItems:'center'}}>
                      <Image  source={require('../assets/userprof.png')}
          style={{ width: vw * 0.070, height: vw * 0.070,}} />
          </View>
                      </View>
                      
                      <View style={styles.radio}>
                      
        <Text style={{color:'#FFF',
    fontSize: vh * 0.03, 
    fontFamily:'Poppins-SemiBold', 
    textAlign:'center',
    
    }}>
         Max Loan Limit 
        </Text>
        <Text style={{color:'#fff',
    fontSize: vh * 0.08, 
   fontFamily:'Poppins-SemiBold', 
    textAlign:'center',
    marginTop:-vh * 0.02}}>
        ₦5,000,000
        </Text>
       
      

                       
                      </View>
         {/* upper end             */}
         </LinearGradient>
      

        {/* wrap end */}
        <View style={styles.lower}>
       <View >
       <View>
        
         
          <SlidingText textList={textList} />
        </View>
       
        <Text style={styles.textHeading}>
          Please select a loan Package
        </Text>
       </View>

       <View style={styles.card}>
        <View style={styles.per}>
       <View styles={{width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden',}}>
           <View style={{ width: vh * 0.08, height: vh * 0.08 ,borderRadius:50, borderWidth:1.5, borderColor:'#224b5f',
              elevation:10,  alignItems: 'center',backgroundColor:'#f5f5f5',top:vh * 0.028,left:10,
              justifyContent: 'center'
              }}>   
            <Image  source={require('../assets/worker.png')}
              style={{ width: vh * 0.06, height: vh * 0.06 }} />
              </View>
              <Text style={{color:'#22292F',  alignItems: 'center',
                           fontSize: vh * 0.032,
                          fontFamily:'Poppins-SemiBold',paddingTop:vh * 0.031,left:10}}>
              Personal{'\n'}Loan
            </Text>
            <Text style={{color:'#22292F',  alignItems: 'center',
                          fontSize: vh * 0.020,
                          fontFamily:'Poppins-Regular',top:-vh * 0.005, left:10}}>
               Borrow up to {'\n'}₦1,000,000
            </Text>
        </View>
        <TouchableOpacity  style={styles.buttoona} onPress={() => {
    navigation.navigate("Personal");
  }}>
          <Text style={{fontSize: vh * 0.025,
                        color:"#FFF",
                        left:10,
                        fontFamily:'Poppins-SemiBold',}}>Apply</Text>
                         <Image  source={require('../assets/right-arrows.png')}
              style={{ width: vh * 0.033, height: vh * 0.024 ,right:10}} />
        </TouchableOpacity>
        </View>
        <View style={styles.per}>
       <View styles={{width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden',}}>
           <View style={{width: vh * 0.08, height: vh * 0.08 ,borderRadius:50, borderWidth:1.5, borderColor:'#f44336',
              elevation:10,  alignItems: 'center',backgroundColor:'#f5f5f5',top:vh * 0.028,left:10,
              justifyContent: 'center'
              }}>   
            <Image  source={require('../assets/cooperation.png')}
              style={{ width: vh * 0.06, height: vh * 0.06 }} />
              </View>
              <Text style={{color:'#22292F',  alignItems: 'center',
                           fontSize: vh * 0.032,
                          fontFamily:'Poppins-SemiBold',paddingTop:vh * 0.031,left:10}}>
              Business{'\n'}Loan
            </Text>
            <Text style={{color:'#22292F',  alignItems: 'center',
                          fontSize: vh * 0.020,
                          fontFamily:'Poppins-Regular',top:-vh * 0.005, left:10}}>
               Borrow up to {'\n'}₦5,000,000
            </Text>
        </View>
        <TouchableOpacity  style={styles.buttoon} onPress={() => {
    navigation.navigate("Business");
  }}>
          <Text style={{fontSize: vh * 0.025,
                        color:"#FFF",
                        left:10,
                        fontFamily:'Poppins-SemiBold',}}>Apply</Text>
                         <Image  source={require('../assets/right-arrows.png')}
              style={{ width: vh * 0.033, height: vh * 0.024 ,right:10}} />
        </TouchableOpacity>
        </View>
       </View>
       </View>
      </ScrollView>
      
      
      
    
  
   
   
    
    </View>
    
  )
}

export default Welcome

 
const styles = StyleSheet.create({
  container: {
    flex:1,
    color: '#01566F',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    
   

  },
  upper:{
   
  
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    width: '100%',
    height: vh * 0.40,
    
    
    
  },
  lower:{
   
 backgroundColor:'#F5F5F5',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    width: '100%',
    height: '40%',
    top:'-10%'
    
    
  },
  
  buttoon:{
    height:vh * 0.062,
   borderBottomLeftRadius: 18,    
   borderBottomRightRadius: 18,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"space-between",
    textAlign:"center",
    flexDirection:'row'
    
  },
  buttoona:{
    
    height:vh * 0.062,
   borderBottomLeftRadius: 18,    
   borderBottomRightRadius: 18,    
    backgroundColor:"#224b5f",
    alignItems: "center",
    justifyContent:"space-between",
    textAlign:"center",
    flexDirection:'row'
    
  },
 
  radio: {
    flexDirection: 'column',
    justifyContent: 'center',
   
    alignContent:'center',
    alignItems: 'center',top:vh * 0.08
 },
  img: {
    height: 22, 
    width: 22,
    marginHorizontal: 5,
  },
  btn: {
   
    height:35,
    width: 80,
    borderWidth: 1.5,
   borderRadius: 10,
    borderColor: "#f44336",
    backgroundColor:"#eee",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
  },
  
  
  
  textHeading:{
    color:'#22292F',
    fontSize: vh * 0.03, 
    narginBottom: 5,
    fontFamily:'Poppins-SemiBold', 
    paddingTop:10,
    alignItems: 'center',
    textAlign:'center'
    
  },
  textParagraph:{
    
   
    fontFamily:'Poppins-Regular',
    
    color:'#515151',
    alignItems: 'center',
    textAlign:'center',
    paddingBottom: 10, 
    fontSize: 13,

    
    
  },

    card:{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignSelf:'center',
      width:'90%',
      height:'100%',

    },
    bus:{
      borderColor: '#ccc',
      width:'48%',
      height:'48%',
      posistion: 'absolute',
      backgroundColor: '#eee',
      borderWidth: 0.5,
      borderRadius: 18,
    },
    per:{
      height:'100%',
      width:'48%',
      backgroundColor:'#fff',
      borderColor: '#ccc',
      elevation: 10,
      borderWidth: 1,
      borderRadius: 18,
      shadowColor: "#aaa",
      justifyContent: 'space-between',
      flexDirection:'column'
     
    },
    


  });