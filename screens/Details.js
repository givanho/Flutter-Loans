import { StyleSheet, View, Text,  TouchableOpacity, BackHandler,
   Image, ScrollView} from 'react-native'
  import React , {useEffect, useState} from 'react'
  import {  collection, getDocs, 
    doc,getDoc } from "firebase/firestore"; 
import { LinearGradient } from 'expo-linear-gradient';
  import { db } from "../firebase"
  import {UserAuth} from "../contest"
import {vw, vh} from './MyDimensions'

  const Details = ({navigation}) => {
      
         const[loanHistory, setLoanHistory] = useState('')
         const[bvn, setBvn] = useState('')
         const [loanDate, setLoanDate] = useState('')
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
  setLoanHistory(data.Amount)
  setBvn(data.BVN)
  setLoanDate(data.FormattedDate)

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

                      
                      <View style={styles.radio}>
                      <View style={{
                      height:'60%',
                      
                        
                      }}>
       <Image  source={require('../assets/userprof.png')}
          style={{ width: vh *0.09, height: vh *0.09, alignSelf:'center'}} />
        {  movies.map((movie,idx) =>(
                    <Text style={{color:'#fff',
                    fontSize: vw *0.08, 
                   fontFamily:'Poppins-SemiBold', 
                    marginTop:vh *0.035,
                    alignItems: 'center',
                    textAlign:'center'}}key={idx}>
                     {movie.data.firstName} {movie.data.lastName}
                      </Text>))}
                      {  movies.map((movie,idx) =>(
                    <Text  style={{color:'#fff',
                    fontSize: vw *0.045, 
                   fontFamily:'Poppins-SemiBold', 
                    marginTop:-vh *0.02,
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
        
           <View style={{flexDirection:'row', justifyContent:'space-between', width: '58%',alignContent:'center',
            alignItems:'center', alignSelf:'center',marginTop:vh *0.010, marginBottom:vh *0.010}}>   
           <View>
            <Image  source={require('../assets/history.png')}
              style={{ width: vh *0.032, height: vh *0.030, opacity:0.9}} />
              </View>
            
            <View><Text style={{color:'#22292F',
                           fontSize: vw *0.045,
                          fontFamily:'Poppins-SemiBold'}}>Loan History</Text>
                          </View>
              </View>
              {loanHistory ? (
                       <View style={{flexDirection:"row", justifyContent:'space-between'}}> 
                      <Text style={[styles.textParagraph, {color:'green'}]}> ₦{' '}
                        <Text style={[styles.textParagraph, {color:'green'}]}>
                         {loanHistory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                         

                            </Text>
                            </Text>
                            
                            <Text style={[styles.textParagraph, {color:'green'}]}>
                              {loanDate}
                            </Text> 
                            </View>):(
                            <View style={{flex:1, height:"100%", width:'100%'
                           
                           }}><Text style={{color:'gray',
                           fontSize: vw *0.038,
                          fontFamily:'Poppins-Regular'}}>
                               You have not applied for any loans yet.
                            </Text>
                            </View>)}
              
              
            
        </View>
       
        </View>
        <View style={styles.per}>
       <View styles={{width: '100%', height: '100%', borderRadius: 10, backgroundColor:'#000'}}>
       <View style={{flexDirection:'row', justifyContent:'space-between', width: '30%',alignContent:'center',
            alignItems:'center', alignSelf:'center',marginTop:vh *0.010, marginBottom:vh *0.010}}>   
           <View>
            <Image  source={require('../assets/file.png')}
              style={{ width: vh *0.035, height: vh *0.035,marginRight:20 , opacity:0.9}} />
              </View>
            
            <View><Text style={{color:'#22292F',
                           fontSize: vw *0.045,
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
                     
                    <View style={[styles.details, {borderBottomWidth:vh *0.0}]}>
                            <View>
                              <Text style={styles.textParagraph}>
                              BVN: 
                              </Text>
                            </View>
                            <View>
                            {  movies.map((movie,idx) =>(
                    <Text  style={styles.textParagraph} key={idx}>
                      {bvn}
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
              style={{ width: vh *0.025, height: vh *0.025 }}/>
        </View>
       <View>
        <Text style={{color:'#f44336',
                     fontSize: vw *0.045,
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
    
      width: '100%',
      height: '40%',
      
      
      
    },
    lower:{
   backgroundColor:'#F5F5F5',
      borderTopEndRadius: vh *0.05,
      borderTopStartRadius: vh *0.05,
      width: '100%',
      height: '100%',
      top:-vh *0.13,
      marginBottom:'50%'
      
      
    },
    details:{
      flexDirection: 'row',
      justifyContent:'space-between',
      width: '75%',
      alignContent:'center',
      alignItems:'center', 
      alignSelf:'center',
      borderBottomWidth:vh *0.006,
      borderColor:'#F5F5F5',
  
    },
   
    radio: {
      flexDirection: 'row',
      justifyContent: 'space-around',
     
      alignContent:'center',
      alignItems: 'center'
   },
    
    textHeading:{
      color:'#22292F',
      fontSize: vw*0.040, 
     
      fontFamily:'Poppins-SemiBold', 
      paddingTop:vh*0.015,
      alignItems: 'center',
      textAlign:'center'
      
    },
    textParagraph:{
      fontFamily:'Poppins-Regular',
      color:'#515151',
      alignItems: 'center',
      textAlign:'center',
      paddingTop: vw *0.030, 
      fontSize: vw *0.035,
  
      
      
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
        height:'13%',
        width:'85%',
        backgroundColor:'#fff',
        borderColor: '#ccc',
        elevation: 3,
        borderWidth: 1,
        borderRadius: vw * 0.05,
        shadowColor: "#aaa",
        justifyContent: 'center',
        flexDirection:'row',
       marginBottom:vh * 0.02,
       marginTop:vh * 0.02
      },
      per:{
        height:'33%',
        width:'85%',
        backgroundColor:'#fff',
        borderColor: '#ccc',
        elevation: 3,
        borderWidth: 1,
        borderRadius:  vw * 0.05,
        shadowColor: "#aaa",
        justifyContent: 'center',
        flexDirection:'row',
       marginBottom:vh * 0.02
      },
      
  
  
    });