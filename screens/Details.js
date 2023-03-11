import { StyleSheet, View, Text, Pressable , Linking, TextInput, TouchableOpacity, BackHandler,
    StatusBar,Image, Alert, ScrollView} from 'react-native'
  import React , {useEffect, useState} from 'react'
  import { getFirestore, collection,setDoc, addDoc, getDocs, 
    doc, DocumentSnapshot, getDoc } from "firebase/firestore"; 
import { LinearGradient } from 'expo-linear-gradient';
  import { db } from "../firebase"
  import {UserAuth} from "../contest"
  const Details = ({navigation}) => {
      
         
      const [movies, setMovies] = useState([])
      const { user, logout} = UserAuth();
      useEffect(() => {
        const backAction = () => {
          
          navigation.navigate("Welcome")
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

      const handleLogout = async () =>{
        try {
          navigation.navigate("Home");
            await logout()
            
            
            console.log('you logged out')
        } catch(e){
            console.error("realerror"+e.message)
        }
      
    }
const firestore = async () =>{
  const docRef = doc(db, "loanDeal", user.email || user.phoneNumber);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const data = docSnap.data();
  console.log("The Latter "+data.Bank);
} else {
  console.log("No such document!");
}
}

      function getMovies(){
        if(user){
          try
          {  const movieCollectionRef = collection(db, user.email||user.phoneNumber)
            getDocs(movieCollectionRef)
            .then(response =>{
                
                const movs = response.docs.map(doc =>({
                    data: doc.data(),
                    id: doc.id,
            }))
  
            setMovies(movs)
            
            })
          }
            catch(err){
               
                console.log(err.message);
                  }
    
        }
          
            
        }
        
        
        
        useEffect(() =>{
         
          console.log('used effect ran')
          getMovies()
          firestore()
          console.log("user.id")
        }, [user])
    
  
    return (
    <ScrollView style={styles.container}>
      <View style={{
        width: '100%',
        height:'100%',
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

                      
                      <View style={styles.radio}>
                      <View style={{
                      height:'60%',
                      
                        
                      }}>
       <Image  source={require('../assets/userprof.png')}
          style={{ width: 80, height: 80, alignSelf:'center'}} />
        {  movies.map((movie,idx) =>(
                    <Text style={{color:'#fff',
                    fontSize: 32, 
                   fontFamily:'Poppins-SemiBold', 
                    paddingTop:0,
                    marginTop:20,
                    alignItems: 'center',
                    textAlign:'center'}}key={idx}>
                     {movie.data.firstName} {movie.data.lastName}
                      </Text>))}
                      {  movies.map((movie,idx) =>(
                    <Text  style={{color:'#fff',
                    fontSize: 17, 
                   fontFamily:'Poppins-SemiBold', 
                    paddingTop:0,
                    marginTop:-17,
                    alignItems: 'center',
                    textAlign:'center'}}key={idx}>
                      {movie.data.Number}
                      </Text>))}
       
      </View>

                       
                      </View>
         {/* upper end             */}
         </LinearGradient>
      

        {/* wrap end */}
        <View style={styles.lower}>
       <View >
      
       
        <Text style={styles.textHeading}>
          {user.phoneNumber || user.email}
        </Text>
       </View>

       <View style={styles.card}>
        <View style={styles.bus}>
       <View styles={{width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden',}}>
        
           <View style={{flexDirection:'row', justifyContent:'center', width: '70%',alignContent:'center',
            alignItems:'center', alignSelf:'center',marginTop:10, marginBottom:10}}>   
           <View>
            <Image  source={require('../assets/history.png')}
              style={{ width: 30, height: 30,marginRight:20 , opacity:0.9}} />
              </View>
            
            <View><Text style={{color:'#22292F',
                           fontSize: 16,
                          fontFamily:'Poppins-SemiBold'}}>Loan History</Text>
                          </View>
              </View>
              <Text style={{color:'gray',
                           fontSize: 15,
                          fontFamily:'Poppins-Regular'}}>
                            You have not applied for any loans yet
                            </Text>
              
            
        </View>
       
        </View>
        <View style={styles.per}>
       <View styles={{width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden',}}>
       <View style={{flexDirection:'row', justifyContent:'center', width: '70%',alignContent:'center',
            alignItems:'center', alignSelf:'center',marginTop:10, marginBottom:10}}>   
           <View>
            <Image  source={require('../assets/file.png')}
              style={{ width: 30, height: 30,marginRight:20 , opacity:0.9}} />
              </View>
            
            <View><Text style={{color:'#22292F',
                           fontSize: 16,
                          fontFamily:'Poppins-SemiBold'}}>Details</Text>
                          </View>
              </View>
              <ScrollView style={{width:'100%', alignSelf:'center'}}>
                          <View style={styles.details}>
                            <View>
                              <Text style={styles.textParagraph}>
                              Marital Status: 
                              </Text>
                            </View>
                            <View>
                              {  movies.map((movie,idx) =>(
                                <Text style={styles.textParagraph} key={idx}>
                                {movie.data.marritalStatus}
                                  </Text>))}
                            </View>
                            
                          </View>

             
                    <View  style={styles.details}>
                            <View>
                              <Text style={styles.textParagraph}>
                              Gender: 
                              </Text>
                            </View>
                            <View>
                            {  movies.map((movie,idx) =>(
                    <Text style={styles.textParagraph} key={idx}>
                     {movie.data.gender}
                      
                      </Text>))}
                            </View>
                            
                    </View>
                     
                    <View style={styles.details}>
                            <View>
                              <Text style={styles.textParagraph}>
                              Date Of Birth: 
                              </Text>
                            </View>
                            <View>
                            {  movies.map((movie,idx) =>(
                    <Text style={styles.textParagraph} key={idx}>
                     {movie.data.dob}
                      </Text>))}
                            </View>
                            
                    </View>
                     
                    <View style={styles.details}>
                            <View>
                              <Text style={styles.textParagraph}>
                              Address: 
                              </Text>
                            </View>
                            <View>
                            {  movies.map((movie,idx) =>(
                    <Text style={styles.textParagraph} key={idx}>
                      {movie.data.address}
                      </Text>))}
                            </View>
                            
                    </View>
                     
                    <View style={styles.details}>
                            <View>
                              <Text style={styles.textParagraph}>
                              BVN: 
                              </Text>
                            </View>
                            <View>
                            {  movies.map((movie,idx) =>(
                    <Text  style={styles.textParagraph} key={idx}>
                      {movie.data.bvn}
                      </Text>))}
                            </View>
                            
                    </View>
                    
                      

              </ScrollView>
             
                    
        </View>
       
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:'80%'}}>
          <TouchableOpacity style={{flexDirection:'row', width:'80%', alignItems:'center'}}
          onPress={handleLogout}>
        <View style={{paddingRight:15}}>
           <Image 
             source={require('../assets/logout.png')}
              style={{ width: 20, height: 20 }}/>
        </View>
       <View>
        <Text style={{color:'#f44336',
                     fontSize: 16,
                     fontFamily:'Poppins-SemiBold'}}>Logout</Text>
       </View>
       </TouchableOpacity>
       </View>
       </View>
       </View>
       
      </View>
      
      
      
    
  
   
   
    
    </ScrollView>
    
    )
  }
  
  export default Details
  
  
  const styles = StyleSheet.create({
    container: {
      
      color: '#01566F',
      backgroundColor: '#F5F5F5',
     height:'100%'
      
     
  
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
      height: '100%',
      top:-82,
      marginBottom:'50%'
      
      
    },
    details:{
      flexDirection: 'row',
      justifyContent:'space-between',
      width: '69%',
      alignContent:'center',
      alignItems:'center', 
      alignSelf:'center',
      borderBottomWidth:5.5,
      borderColor:'#F5F5F5',
  
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
      fontSize: 14, 
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
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
  
      },
      bus:{
        height:'15%',
        width:'85%',
        backgroundColor:'#fff',
        borderColor: '#ccc',
        elevation: 10,
        borderWidth: 1,
        borderRadius: 22,
        shadowColor: "#aaa",
        justifyContent: 'center',
        flexDirection:'row',
       marginBottom:3
      },
      per:{
        height:'33%',
        width:'85%',
        backgroundColor:'#fff',
        borderColor: '#ccc',
        elevation: 10,
        borderWidth: 1,
        borderRadius: 22,
        shadowColor: "#aaa",
        justifyContent: 'center',
        flexDirection:'row',
       marginBottom:3
      },
      
  
  
    });