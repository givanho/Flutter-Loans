import { StyleSheet, View, Text,BackHandler, TouchableOpacity, 
Image, ScrollView} from 'react-native'
import React , {useState,} from 'react'
import 'react-native-config';

import {PayWithFlutterwave} from 'flutterwave-react-native';
import {UserAuth} from "../contest"
import {flutter} from "@env"
import {vw, vh} from './MyDimensions'



const LoanGranted = ({navigation, route: { params } }) =>  {
const [bind, setBind] = useState(null)
  const { user, logout} = UserAuth();

 

  const RedirectParams ={
    status: 'successful' | 'cancelled',
    transaction_id : '',
    tx_ref: '',
  }
  


const handleOnRedirect = (data) => {
  if (data.status === 'successful'){
    navigation.navigate("Disbursed");
    setBind(null)
  }
  else{
    setBind('Failed to link your card')
  }
};
 
  const generateTransactionRef = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `flw_tx_ref_${result}`;
  };



    const { bank, account, raiden, range,
        month,bvn,
        interest } = params;
      
    const totalSum = range + interest

  return (
<ScrollView >
    <View style={styles.container}>
  



      <Text style={styles.textHeadingt}>Bind Your Card</Text>
          <Text style={styles.textParagraph}>You might be charged a service fee of 50 Naira</Text>
          <Text style={styles.textParagraph}>We will not automatically debit you. </Text>
        <View>
          
                   <Image  source={require('../assets/loansummary/Walleta.gif')}
          style={{ width: 0.3*vh, height: 0.3*vh }} />
         
        </View>
         
           <View>
            <Text  style={styles.textParagrapha}>Repayment Amount:</Text>
            <Text style={styles.textHeadingb}> ₦{' '}
       <Text style={styles.textHeadingb}>{totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
           </View>

       <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%', alignItems:'center',flexGrow:0}}>
           <View>

           <View>
            <Text style={styles.textParagraph}>Account Name:</Text>
            <Text style={styles.textHeadings}>{raiden}</Text>
           </View>
           <View>
            <Text style={styles.textParagraph}>Account Number:</Text>
            <Text style={styles.textHeading}>{account}</Text>
           </View> 
           <View>
            <Text style={styles.textParagraph}>Bank:</Text>
            <Text style={styles.textHeadings}>{bank}</Text>
           </View>

           </View>
           <View>
           <View>
            <Text style={styles.textParagraph}>Loan Amount:</Text>
            <Text style={styles.textHeading}>₦{' '}
       <Text style={styles.textHeading}>{range.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
           </View>
           <View>
            <Text style={styles.textParagraph}>Loan Duration:</Text>
            <Text style={styles.textHeading}>{month} <Text style={styles.textHeading}> Month( s )</Text></Text>
           </View>
           <View>
            <Text style={styles.textParagraph}>
              Loan Interest:
            </Text>
            <Text style={styles.textHeading}>₦{' '}
       <Text style={styles.textHeading}>{interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
           </View>
           
           </View>

       </View>
       <View style={{width:'100%'}}>

       <PayWithFlutterwave
  onRedirect={handleOnRedirect}
  options={{tx_ref: generateTransactionRef(10),
    authorization: `${flutter}`,
    customer: {
      'email': "flutterloans.biz@gmail.com",
    },
    
    amount: 50,
    currency: 'NGN',
    payment_options: 'card',
    
    }}
  customButton={(props) => (
    <TouchableOpacity
      style={styles.submit}
      onPress={props.onPress}
      isBusy={props.isInitializing}
      disabled={props.disabled}
    >
      <Text style={{fontSize: vw * 0.045,
                                        color:"#FFF",
                                        fontFamily:'Poppins-SemiBold',}}>Bind Card</Text>
    </TouchableOpacity>
  )}
/>


                  </View>
                  <Text style={{fontSize: vw * 0.030,
                      color:"#F44336",
                      fontFamily:'Poppins-Regular',}}>{bind}</Text>
                      
    </View>
    </ScrollView>
  );
}

export default LoanGranted

const styles = StyleSheet.create({
  container: {
    flex:1,
    color: '#01566F',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width:"85%"
   // top: StatusBar.currentHeight,
   

  },
 
  textHeading:{
    // color:'#22292F',
    color:'#224b5f',
    fontSize: vw * 0.045, 
    marginBottom: vh * 0.003,
    fontFamily:'Poppins-SemiBold', 
    marginTop:-vh * 0.01,
    
  },
  
  textHeadings:{
    // color:'#22292F',
    color:'#224b5f',
    fontSize: vw * 0.04, 
    marginBottom: vh * 0.003,
    fontFamily:'Poppins-SemiBold', 
    marginTop:-vh * 0.01,
    width:vw * 0.5
    
    
    
  },
  textHeadingt:{
     color:'#22292F',
    //color:'#224b5f',
    fontSize: vw * 0.050, 
    paddingTop:0.05*vh,
    
    fontFamily:'Poppins-SemiBold', 
    
    
    
    
  },
  
  textHeadingb:{
    // color:'#22292F',
    color:'#224b5f',
    fontSize: vw * 0.1, 
    fontFamily:'Poppins-SemiBold', 
    marginTop:-0.02*vh,
    alignSelf: 'center',
    
    
  },
  textParagraph:{
    
    fontSize: vw * 0.035,
    fontFamily:'Poppins-Regular',
  
    color:'#515151',
    alignItems: 'center',
    alignContent:'center',
    
    
    
  },
  textParagrapha:{
    
    fontSize: vw * 0.045,
    fontFamily:'Poppins-Regular',
   
    color:'#515151',
    alignItems: 'center',
    textAlign:'center',
    
    
  },
 
  submit:{
    marginTop: 0.012*vh,
    height:0.065*vh,
    width: '100%',
    
   borderRadius: vw * 0.04,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
  },
 
});
