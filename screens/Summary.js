import { StyleSheet, View, Text, Pressable , Linking, TextInput, TouchableOpacity, BackHandler,
    StatusBar, Alert, Image,SafeAreaView,Button,  ScrollView} from 'react-native'
import React , {useEffect, useState} from 'react'
import axios from 'axios';
import LoanGranted from './LoanGranted';
import LoanSummaryContext from '../LoanSummaryContext';

const LoanSummary = ({navigation, route: { params } }) => {
  
  // Use the props here
  const { bank, account, raiden, range,
    month,
    duration } = params;
   
  console.log(raiden)
  console.log(range)
  console.log(month)
  console.log(duration)
  

  return (
    
    
    <View style={styles.container}>
      

<View >
      <View>
        <Text style={styles.textHeading}>
          Loan Summary
        </Text>
      </View>
        
      <View style={styles.svg}>
        <Image  source={require('../assets/Presentation1.png')}
        style={{ width: 380, height: 210 }} />
      </View>


</View>
<ScrollView style={{ width:'100%', height:'60%', alignContent:'center', paddingTop:20,borderColor:'red'
}} >
<View  style={{backgroundColor:'#fff',width:'85%', alignSelf:'center',borderRadius:25, elevation: 5, borderColor:'red'
}}>

 {/* Render the component using the props */}
 <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#bfc1c1', borderBottomWidth:1, borderStyle: 'dashed'}}>
 <Image  source={require('../assets/loansummary/bank.png')}
        style={{ width: 40, height: 40, marginLeft:20 }} />
 <View style={{ alignItems:'flex-start'}}>
 <Text style={styles.textParagraph}>Bank</Text>
 <Text style={styles.textParagrapha}>{bank}</Text>
    </View>
    </View>

    <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#bfc1c1', borderBottomWidth:1, borderStyle: 'dashed'}}>
  <Image  source={require('../assets/loansummary/accounting.png')}
        style={{ width: 40, height: 40, marginLeft:20 }} />
      <View style={{ alignItems:'flex-start'}}>

    <Text style={styles.textParagraph}>
    Account Number </Text> 
    <Text style={styles.textParagrapha}>{account}</Text>  
    </View>
     </View>

     <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#bfc1c1', borderBottomWidth:1, borderStyle: 'dashed'}}>
  <Image  source={require('../assets/loansummary/id-card.png')}
        style={{ width: 40, height: 40, marginLeft:20 }} />
      <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Account Name</Text>
       <Text style={styles.textParagrapha}>{raiden}</Text>
    </View>
    </View>

    <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#bfc1c1', borderBottomWidth:1, borderStyle: 'dashed'}}>
  <Image  source={require('../assets/loansummary/money-bag.png')}
        style={{ width: 40, height: 40, marginLeft:20 }} />
    <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Loan Amount</Text>
       <Text style={styles.textParagrapha}> ₦{' '}
       <Text style={styles.textParagrapha}>{range.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
       </View>
       </View>

       <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#bfc1c1', borderBottomWidth:1, borderStyle: 'dashed'}}>
  <Image  source={require('../assets/loansummary/clock.png')}
        style={{ width: 40, height: 40, marginLeft:20 }} />
    <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Loan Duration</Text>
       <Text style={styles.textParagrapha}>{month} Months</Text>
    </View>
    </View>

    <View style={{ flexDirection:'row', alignItems:'center',
}}>
  <Image  source={require('../assets/loansummary/interest-rate.png')}
        style={{ width: 40, height: 40, marginLeft:20 }} />
    <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Loan Interest</Text>
       <Text style={styles.textParagrapha}> ₦{' '}
       <Text style={styles.textParagrapha}>{duration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
    </View>
    </View>

    
 
</View>
<View>
                        <TouchableOpacity  style={styles.submit} onPress={() => {
    navigation.navigate('Waiting', { bank, account, raiden, range, month, duration });
  }}>
                          <Text style={{fontSize: 16,
                                        color:"#FFF",
                                        fontFamily:'Poppins-SemiBold',}}>
                              Get Loan
                          </Text>
                        </TouchableOpacity>
                  </View>
</ScrollView>
     

   
    </View>
    
  );
};

export default LoanSummary

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
    width: 'auto',
    marginBottom: 15,
  },
  textHeading:{
    // color:'#22292F',
    color:'#224b5f',
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
    marginLeft:30 ,
    color:'#515151',
    alignItems: 'center',
    alignContent:'center',
    paddingTop:10
    
    
  },
  textParagrapha:{
    
    fontSize: 17,
    fontFamily:'Poppins-Regular',
    marginLeft:30 ,
    color:'#224b5f',
    alignItems: 'center',
    textAlign:'center',
    paddingBottom: 10
    
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
    marginTop: 20,
    height:50,
    width: '85%',
    marginBottom:50,
   borderRadius: 15,    
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
