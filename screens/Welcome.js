import { StyleSheet, View, Text, Pressable , Linking, TextInput, TouchableOpacity, BackHandler,ImageBackground,
  StatusBar, Alert, Image} from 'react-native'
import React , {useEffect, useState} from 'react'
import { getFirestore, collection,setDoc, addDoc, getDocs, 
  doc, DocumentSnapshot, Firestore } from "firebase/firestore"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient';
import SlidingText from '../utils/SlidingText';

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
  const [headerMale, setHeaderMale] = useState(false);
  const [headerFemale, setHeaderFemale] = useState(false);
  useEffect(() => {
    const backAction = async () => {
      try{
        navigation.navigate("SignIn");
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
      <View style={{
        width: '100%',
        height: '100%',
        top:0}}>



      <LinearGradient
        // Background Linear Gradient
        colors={[ '#224b5f','#2980b9',]}
        style={styles.upper}>
      
      <Image  source={require('../assets/patterns.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute'}} />
           <Image  source={require('../assets/pencil.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',top:0,left:70}} />
<Image  source={require('../assets/paper-airplane.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',top:10,left:130}} />
          <Image  source={require('../assets/leaf.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',top:30,right:10}} />
          <Image  source={require('../assets/love.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',top:95,right:30}} />
          <Image  source={require('../assets/get-money.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',top:70,left:0}} />
          <Image  source={require('../assets/right-arrow-angle.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',top:90,left:100}} />
          <Image  source={require('../assets/laptop.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',top:20,right:-80}} />
          <Image  source={require('../assets/bag.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',right:120}} />
          <Image  source={require('../assets/bulb.png')}
          style={{ width: 60, height: 60,opacity:0.14,position:'absolute',left:30,top:140}} />
          <Image  source={require('../assets/deal.png')}
          style={{ width: 60, height: 60,opacity:0.14,position:'absolute',right:70,top:160}} />
          <Image  source={require('../assets/chat-balloon.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',left:190,top:120}} />
          <Image  source={require('../assets/dollar-sign-inside-oval-shape.png')}
          style={{ width: 60, height: 60,opacity:0.07,position:'absolute',left:110,top:160}} />
<View style={{flexDirection:'row', justifyContent:'space-between', width: '85%', alignItems:'center', alignSelf:'center'}}>
  <View>
      {  movies.map((movie,idx) =>(
        
       
                    <Text style={{fontFamily:'Poppins-SemiBold',
    
                    color:'#fff',
                    alignItems: "flex-start",
                    textAlign:'left',
                    paddingBottom: 10, 
                    fontSize: 19,}} key={idx}>
                     Welcome, {'\n'+movie.data.firstName}
                      
                      </Text>))}
                      </View>
                      <View style={{ borderRadius:50, borderColor:'#fff',width: 40, height: 40, borderWidth:2,
                       justifyContent:'center', alignItems:'center'}}>
                      <Image  source={require('../assets/userprof.png')}
          style={{ width: 30, height: 30,}} />
          </View>
                      </View>
                      
                      <View style={styles.radio}>
                      <View style={{
                      
                      
                        
                      }}>
        <Text style={{color:'#FFF',
    fontSize: 18, 
    fontFamily:'Poppins-SemiBold', 
    alignItems: 'center',
    textAlign:'center',
    paddingTop:28
    }}>
         Max Loan Limit 
        </Text>
        <Text style={{color:'#fff',
    fontSize: 52, 
   fontFamily:'Poppins-SemiBold', 
    paddingTop:0,
    marginTop:-20,
    alignItems: 'center',
    textAlign:'center'}}>
        ₦5,000,000
        </Text>
       
      </View>

                       
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
           <View style={{ width: 60, height: 60 ,borderRadius:50, borderWidth:1.5, borderColor:'#224b5f',
              elevation:10,  alignItems: 'center',backgroundColor:'#f5f5f5',top:20,left:10,
              justifyContent: 'center'
              }}>   
            <Image  source={require('../assets/worker.png')}
              style={{ width: 50, height: 50 }} />
              </View>
              <Text style={{color:'#22292F',  alignItems: 'center',
                           fontSize: 25,
                          fontFamily:'Poppins-SemiBold',paddingTop:23,left:10}}>
              Personal{'\n'}Loan
            </Text>
            <Text style={{color:'#22292F',  alignItems: 'center',
                          fontSize: 13,
                          fontFamily:'Poppins-Regular',top:-10, left:10}}>
               Borrow up to {'\n'}₦1,000,000
            </Text>
        </View>
        <TouchableOpacity  style={styles.buttoona} onPress={() => {
    navigation.navigate("Personal");
  }}>
          <Text style={{fontSize: 16,
                        color:"#FFF",
                        left:10,
                        fontFamily:'Poppins-SemiBold',}}>Apply</Text>
                         <Image  source={require('../assets/right-arrows.png')}
              style={{ width: 25, height: 25 ,right:10}} />
        </TouchableOpacity>
        </View>
        <View style={styles.per}>
       <View styles={{width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden',}}>
           <View style={{ width: 60, height: 60 ,borderRadius:50, borderWidth:1.5, borderColor:'#f44336',
              elevation:10,  alignItems: 'center',backgroundColor:'#f5f5f5',top:20,left:10,
              justifyContent: 'center'
              }}>   
            <Image  source={require('../assets/cooperation.png')}
              style={{ width: 50, height: 50 }} />
              </View>
              <Text style={{color:'#22292F',  alignItems: 'center',
                           fontSize: 25,
                          fontFamily:'Poppins-SemiBold',paddingTop:23,left:10}}>
              Business{'\n'}Loan
            </Text>
            <Text style={{color:'#22292F',  alignItems: 'center',
                          fontSize: 13,
                          fontFamily:'Poppins-Regular',top:-10, left:10}}>
               Borrow up to {'\n'}₦5,000,000
            </Text>
        </View>
        <TouchableOpacity  style={styles.buttoon} onPress={() => {
    navigation.navigate("Business");
  }}>
          <Text style={{fontSize: 16,
                        color:"#FFF",
                        left:10,
                        fontFamily:'Poppins-SemiBold',}}>Apply</Text>
                         <Image  source={require('../assets/right-arrows.png')}
              style={{ width: 25, height: 25 ,right:10}} />
        </TouchableOpacity>
        </View>
       </View>
       </View>
      </View>
      
      
      
    
  
   
   
    
    </View>
    
  )
}

export default Welcome

 
const styles = StyleSheet.create({
  container: {
    flex:1,
    color: '#01566F',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    
   

  },
  upper:{
   
    backgroundColor: "#eee",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    width: '100%',
    height: '40%',
    
    
    
  },
  lower:{
   
 backgroundColor:'#F5F5F5',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    width: '100%',
    height: '40%',
    top:-45
    
    
  },
  TextInput:{
    marginTop: 11,
    height:40,
   width: '85%',
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    borderWidth: 1.5,
   borderRadius: 10,
    borderColor: "#224b5f",
    backgroundColor:"#eee",
   
    
    alignItems: "center",
    justifyContent:"center",
    textAlign:"left",
    paddingLeft: 20,
    
    
  },
  button:{
    marginTop: 40,
    height:45,
    marginBottom:20,
   borderBottomLeftRadius: 18,    
   borderBottomRightRadius: 18,    
    backgroundColor:"#37474F",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
   
  },
  buttoon:{
    
    height:45,
    
   borderBottomLeftRadius: 18,    
   borderBottomRightRadius: 18,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"space-between",
    textAlign:"center",
    flexDirection:'row'
    
  },
  buttoona:{
    
    height:45,
    
   borderBottomLeftRadius: 18,    
   borderBottomRightRadius: 18,    
    backgroundColor:"#224b5f",
    alignItems: "center",
    justifyContent:"space-between",
    textAlign:"center",
    flexDirection:'row'
    
  },
  buttonTxt:{
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    
  },
  logout:{
   width:"85%",
   alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between'
   
  },
  flex:{
    flexDirection: 'row',
              alignItems: 'center',  marginTop: 5,
              height:40,
              width: 165,
              backgroundColor:"#eee",
              fontSize: 14,
              borderWidth: 1,
             borderRadius: 12,
             borderColor: "#224b5f",
              color: "#fff" 
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   
    alignContent:'center',
    alignItems: 'center'
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
    fontSize: 19, 
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