import { View, Text, StyleSheet, Pressable , TextInput, 
  TouchableOpacity,  Image, Platform,  ScrollView, BackHandler} from 'react-native'
import {UserAuth} from "../contest"
import React, {useState, useEffect} from "react";
import  DateTimePicker from '@react-native-community/datetimepicker'
import { db } from '../firebase';
import Lottie from 'lottie-react-native';
import { collection,setDoc, addDoc, getDoc, doc } from "firebase/firestore"; 

const Profile = ({ navigation }) => {

  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [married, setMarried] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [young, setYoung] = useState(null);
  const [number, setNumber] = useState("")
  

  //For Gender
  const genders = ['Male', 'Female'];
  const [checked, setChecked] = useState();

  //for Marital Status
  const status = ['Married', 'Divorced', 'Single', 'Windowed'];
  const [checkers, setCheckers] = useState()

  //for date

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState ('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('DD / MM / YYYY')
  const [userEmail, setUserEmail] = useState(null)
  const [userNumber, setUserNumber] = useState(null)
  const { user, logout} = UserAuth();
  const allInputsFilled = name !=='' && lname !=='' && gender !=='' && number !== '' && dob !== ''
                           && address !== '' && married !== ''

  const [isLoading, setIsLoading] = useState(false)
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


  const handleLogout = async () =>{
      try {
          await logout()
         
          navigation.navigate("Home");
          setUserNumber(null)
          setUserEmail(null)
          console.log('you logged out')
      } catch(e){
          console.error(e.message)
      }
  }
 
  
  const [singleDoc, setSingleDoc] = useState({})
  const handleSubmit = async (e) => {
      e.preventDefault()
      
      
      
if (user){
  
      
      try {
       
        setIsLoading(true);
          
         const docRef = await addDoc(collection(db, user.email || user.phoneNumber), {
            firstName: name,
            lastName: lname,
            gender:gender,
            dob: dob,
            address:address,
            Number: number,
            marritalStatus:married
          });
          console.log("Document written with ID: ", docRef.id);
          const docSnap = await getDoc(docRef);
          navigation.navigate("Welcomed");

if (docSnap.exists()) {
  navigation.navigate("Welcomed");
console.log("Document data:", docSnap.data());
const datas = docSnap.data()
 setSingleDoc(datas);
  console.log(singleDoc);
 
  
   
  


} else {
// doc.data() will be undefined in this case
console.log("No such document!");

}
  
          
            // Add a new document in collection "cities"
        setIsLoading(true);

         await setDoc(doc(db, "users", user.email || user.phoneNumber), {
            firstName: name,
            lastName: lname,
            gender:gender,
            dob: dob,
            address:address,
            marritalStatus:married,
            Number: number,
          });
          
          setIsLoading(false);

        } catch (e) {
          console.error("Error adding document: ", e);
          setIsLoading(false);

        }
      }
      

      
  
  }
  
//function for date

const onChange =( events, selectedDate )=>{
  const current = new Date();
const currentDate = selectedDate || date;
setShow(Platform.OS=='ios')
setDate(currentDate)
let tempDate = new Date(currentDate)

let fDate = tempDate.getDate() + '/'+ (tempDate.getMonth() + 1) +'/' + tempDate.getFullYear();
if (current.getFullYear()-tempDate.getFullYear() >=18){
  
  
  setDob(fDate)
  setText(fDate)
  setYoung(null)
}
else{
  setYoung('You must be 18 and above')
}


}

const showMode = (currentMode) =>{
setShow(true);
setMode(currentMode)
}

return (
  <ScrollView>
  <View style={styles.container}>
    <View style={styles.logout}>
      <View>
      
      {user? 
          <Text style={styles.buttonTxt}>{user.phoneNumber || user.email}</Text> : null
        }
   
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between',width:'30%'}}>
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
                  <View style={styles.svg}>
          <Image  source={require('../assets/Designer1.png')}
          style={{ width: 280, height: 270 }} />
        </View>

                  
      <Text style={styles.textParagraph}>Please fill the form accurately to help us give you the best offer</Text>
      <TextInput onChangeText={(text) => setName(text)} style={styles.TextInput} placeholder={'First Name'} placeholderTextColor={"#686868"} > 
      </TextInput>
      <TextInput style={styles.TextInput 
      } onChangeText={(text) => setLName(text)}
      placeholder={'Last Name'} placeholderTextColor={"#686868"} > 
      </TextInput>

      
      <View style={{width:351}}>
  <Text style={{marginTop: 24, 
                fontSize: 16,
                fontFamily:'Poppins-Regular',
                marginBottom: -7,
                color:'#515151', marginRight:"auto"}}> Gender</Text>
  <View style={styles.radio}>
    {genders.map((gender, val) => {
      return (
        <View key={val}>
          {checked == val ? (
            <TouchableOpacity style={{flexDirection: 'row',
                                        alignItems: 'center',  
                                        marginTop: 5,
                                        height:40,
                                        width: 165,
                                        color:'#515151',
                                        fontFamily:'Poppins-Regular',
                                        fontSize: 16,
                                        borderWidth: 1,
                                        borderRadius: 12,
                                        borderColor: "#f44336",
                                        backgroundColor:"#eee"
                                      }}
                              >
              <Image style={styles.img} source={require('../assets/radio-buttona.png')} />
              <Text style={{color:'#515151', fontFamily:'Poppins-Regular', fontSize: 14, paddingLeft: 20}}>
                {gender}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.flex}
                                onPress={() => {
                                  setChecked(val);
                                  setGender(gender);
                                }} 
                                key={val}
                                >
              <Image style={styles.img} source={require('../assets/radio-buttonb.png')} />
              <Text style={{color:'#515151', fontFamily:'Poppins-Regular', fontSize: 14, paddingLeft: 20}}>
                {gender}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      );
    })}
  </View>
</View>

<View>
  <Text style={{marginTop: 24, 
                fontSize: 16,
                fontFamily:'Poppins-Regular',
                marginBottom: -7,
                color:'#515151', marginRight:"auto"}}>
                Marital Status
  </Text>
  <View style={{flexDirection:"row", flexWrap:"wrap", width:351, justifyContent:"space-between"}}>
    {status.map((statuses, key) => {
      return (
        <View key={key}> 
          {checkers == key ? (
            <TouchableOpacity style={{flexDirection:"row",  borderWidth: 1,
                                        borderRadius: 12,borderColor: "#f44336", 
                                        width: 165,
                                        height:40,
                                        alignItems: 'center',
                                        marginTop: 5,
                                      }}
                                >
              <Image style={styles.img} source={require('../assets/radio-buttona.png')} />
              <Text style={{color:'#515151', fontFamily:'Poppins-Regular', fontSize: 14, paddingLeft: 20}}>
                {statuses}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.flex}
                                onPress={() => {
                                  setCheckers(key);
                                  setMarried(statuses);
                                }} 
                                key={key}
                                >
              <Image style={styles.img} source={require('../assets/radio-buttonb.png')} />
              <Text style={{color:'#515151', fontFamily:'Poppins-Regular', fontSize: 14, paddingLeft: 20}}>
                {statuses}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      );
    })}
          
              
          </View>

      
          </View>
          <View style={{width: '85%',}}>
            <Text style={{marginTop: 24, 
              fontSize: 16,
              fontFamily:'Poppins-Regular',
              marginBottom: -5,
              color:'#515151'}}> Date Of Birth</Text>
          <Pressable style={{
            height:40,
            fontSize: 15,
            fontFamily:'Poppins-Regular',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#224b5f",
            backgroundColor:"#eee",
            alignItems: "center",
            justifyContent:"center",
    
    }} onPress={() => showMode('date')}>
    
    <Text style={{color:"#515151", fontFamily:'Poppins-Regular',fontSize: 15}}>{text}</Text>
  </Pressable>
    
    

     {show && (
      <DateTimePicker
      testID=''DateTimePicker
      value = {date}
      mode = {mode}
      is24Hour = {true}
      display ='default'
      onChange={onChange}
      />
  )}
  {young && <Text style={{fontSize: 12,
    fontFamily:'Poppins-Regular',
    
    color:'#F44336', }}>
        {young}
        
        </Text>}
  

  <View style={{width: '100%'}}>
  <TextInput style={{width: '100%',  marginTop: 11,
    height:40,
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    borderWidth: 1,
   borderRadius: 10,
    borderColor: "#224b5f",
    backgroundColor:"#eee",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"left",
    paddingLeft: 20,
    }} placeholder={'Phone Number'} placeholderTextColor={"#686868"} 
     autoCapitalize="none"
     autoCompleteType="off"
     
     autoCorrect={false}
     keyboardType="numeric"
    onChangeText={(text) => setNumber(text)} >

    </TextInput>
    <TextInput style={{width: '100%',  marginTop: 11,
    height:40,
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    borderWidth: 1,
   borderRadius: 10,
    borderColor: "#224b5f",
    backgroundColor:"#eee",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"left",
    paddingLeft: 20,
    }} placeholder={'Home Address:'} placeholderTextColor={"#686868"} 
     autoCapitalize="none"
     autoCompleteType="off"
     autoCorrect={false}
     keyboardType="default"
    onChangeText={(text) => setAddress(text)} >

    </TextInput>
  </View>
  </View>
 
<View style={{height:200,width: '100%', alignItems: "center",
    }}>
   <TouchableOpacity  style={allInputsFilled ? styles.buttoon : styles.disablebutton}
        disabled={!allInputsFilled}
        
  onPress={handleSubmit}>
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
 
                  
  </View>


  </ScrollView>
)
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#01566F',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    
    //top: StatusBar.currentHeight,
   

  },
  TextInput:{
    marginTop: 11,
    height:40,
   width: '85%',
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    borderWidth: 1,
   borderRadius: 10,
    borderColor: "#224b5f",
    backgroundColor:"#eee",
   
    
    alignItems: "center",
    justifyContent:"center",
    textAlign:"left",
    paddingLeft: 20,
    
    
  },
  button:{
    marginTop: 20,
    height:45,
    width: 351,
    borderRadius: 12,
    backgroundColor:"#ff7400",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
   
  },
  buttoon:{
    marginTop: 40,
    height:45,
    width: '85%',
    
   borderRadius: 15,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    
  },
  disablebutton:{
    marginTop: 40,
    height:45,
    width: '85%',
    
   borderRadius: 15,    
    backgroundColor:"gray",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    
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
    justifyContent: 'space-between'
 },
  img: {
    height: 22, 
    width: 22,
    marginHorizontal: 5,
  },
  btn: {
   
    height:35,
    width: 80,
    borderWidth: 1,
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
    
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    width:'80%',
    color:'#515151',
    alignItems: 'center',
    textAlign:'center',
    paddingBottom: 10
    
  }
});
