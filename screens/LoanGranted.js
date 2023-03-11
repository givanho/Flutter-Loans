import { StyleSheet, View, Text,BackHandler, TouchableOpacity, 
Image,} from 'react-native'
import React , {useState,} from 'react'
import 'react-native-config';

import {PayWithFlutterwave} from 'flutterwave-react-native';
import {UserAuth} from "../contest"
import {flutter} from "@env"



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
        month,
        duration } = params;
       
      console.log(raiden)
      console.log(range)
      console.log(month)
      console.log(duration)
    const totalSum = range + duration

  return (
    <View style={styles.container}>
  



      <Text style={styles.textHeadingt}>Bind Your Card</Text>
          <Text style={styles.textParagraph}>You might be charged a service fee of 50 Naira</Text>
          <Text style={styles.textParagraph}>We will not automatically debit you </Text>
        <View>
          
                   <Image  source={require('../assets/loansummary/Walleta.gif')}
          style={{ width: 220, height: 220 }} />
         
        </View>
         
           <View>
            <Text  style={styles.textParagrapha}>Repayment Amount:</Text>
            <Text style={styles.textHeadingb}> ₦{' '}
       <Text style={styles.textHeadingb}>{totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
           </View>

       <View style={{flexDirection:'row', justifyContent:'space-between',width:'85%', alignItems:'center',flexGrow:0}}>
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
            <Text style={styles.textHeading}>{bank}</Text>
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
            <Text style={styles.textHeading}>{month} <Text style={styles.textHeading}> Months</Text></Text>
           </View>
           <View>
            <Text style={styles.textParagraph}>
              Loan Interest:
            </Text>
            <Text style={styles.textHeading}>₦{' '}
       <Text style={styles.textHeading}>{duration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
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
      <Text style={{fontSize: 16,
                                        color:"#FFF",
                                        fontFamily:'Poppins-SemiBold',}}>Bind Card</Text>
    </TouchableOpacity>
  )}
/>


                  </View>
                  <Text style={{fontSize: 12,
                      color:"#F44336",
                      fontFamily:'Poppins-Regular',}}>{bind}</Text>
    </View>
  );
}

export default LoanGranted

const styles = StyleSheet.create({
  container: {
    
    color: '#01566F',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
   // top: StatusBar.currentHeight,
   

  },
  svg:{
   
    height: 'auto',
    width: '100%',
    marginBottom: 15,
  },
  textHeading:{
    // color:'#22292F',
    color:'#224b5f',
    fontSize: 15, 
    marginBottom: 5,
    fontFamily:'Poppins-SemiBold', 
    marginTop:-8,
    
  },
  
  textHeadings:{
    // color:'#22292F',
    color:'#224b5f',
    fontSize: 15, 
    marginBottom: 5,
    fontFamily:'Poppins-SemiBold', 
    marginTop:-8,
    width:180
    
    
    
  },
  textHeadingt:{
    // color:'#22292F',
    color:'#224b5f',
    fontSize: 19, 
    paddingTop:10,
    marginBottom: 5,
    fontFamily:'Poppins-SemiBold', 
    
    
    
    
  },
  
  textHeadingb:{
    // color:'#22292F',
    color:'#224b5f',
    fontSize: 35, 
    narginBottom: 14,
    fontFamily:'Poppins-SemiBold', 
    marginTop:-8,
  
    
    
    
  },
  textParagraph:{
    
    fontSize: 12,
    fontFamily:'Poppins-Regular',
  
    color:'#515151',
    alignItems: 'center',
    alignContent:'center',
    
    
    
  },
  textParagrapha:{
    
    fontSize: 15,
    fontFamily:'Poppins-Regular',
   
    color:'#515151',
    alignItems: 'center',
    textAlign:'center',
    
    
  },
  TextInput:{
    marginTop: 5,
    height:50,
    width: '85%',
    fontSize: 16,
    fontFamily:'Poppins-Regular',
    borderWidth: 1.5,
   borderRadius: 18,
    borderColor: "#224b5f",
    backgroundColor:"#eee",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    color:"#22292F"
    
  },
  submit:{
    marginTop: 70,
    height:50,
    width: '87%',

    
   borderRadius: 18,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    alignSelf: 'center',
    
  },
  button:{
    marginTop: 10,
    height:45,
    width: '85%',
    
   borderRadius: 18,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    
  }
});
