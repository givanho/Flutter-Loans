import { StyleSheet, View, Text, TouchableOpacity,  Image,ScrollView} from 'react-native'
import React , {useEffect, useState} from 'react'
import {vw, vh} from './MyDimensions'

const LoanSummary = ({navigation, route: { params } }) => {
  
  // props are gotten from the other components via navigation
  const { bank, account, raiden, range,
    month,bvn,
    interest } = params;
   
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
        style={{ width: vw * 0.54, height: vh * 0.3 }} />
      </View>


</View>
<ScrollView style={{ width:'100%', height:'60%', alignContent:'center', paddingTop:vh * 0.015,
}} >
<View  style={{backgroundColor:'#fff',width:'85%', alignSelf:'center',borderRadius:vh * 0.025, elevation: 5,
}}>

 {/* Render the component using the props */}
 <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#F5F5F5', borderBottomWidth:vh * 0.005, borderStyle: 'solid'}}>
 <Image  source={require('../assets/loansummary/bank.png')}
        style={{ width: vw * 0.070, height: vw * 0.070, marginLeft:15}} />
 <View style={{ alignItems:'flex-start'}}>
 <Text style={styles.textParagraph}>Bank</Text>
 <Text style={styles.textParagrapha}>{bank}</Text>
    </View>
    </View>

    <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#F5F5F5', borderBottomWidth:vh * 0.005, borderStyle: 'solid'}}>
  <Image  source={require('../assets/loansummary/accounting.png')}
        style={{ width: vw * 0.070, height: vw * 0.070, marginLeft:15}} />
      <View style={{ alignItems:'flex-start'}}>

    <Text style={styles.textParagraph}>
    Account Number </Text> 
    <Text style={styles.textParagrapha}>{account}</Text>  
    </View>
     </View>

     <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#F5F5F5', borderBottomWidth:vh * 0.005, borderStyle: 'solid'}}>
  <Image  source={require('../assets/loansummary/id-card.png')}
        style={{ width: vw * 0.070, height: vw * 0.070, marginLeft:15 }} />
      <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Account Name</Text>
       <Text style={styles.textParagrapha}>{raiden}</Text>
    </View>
    </View>

    <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#F5F5F5', borderBottomWidth:vh * 0.005, borderStyle: 'solid'}}>
  <Image  source={require('../assets/loansummary/money-bag.png')}
        style={{ width: vw * 0.070, height: vw * 0.070, marginLeft:15 }} />
    <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Loan Amount</Text>
       <Text style={styles.textParagrapha}> ₦{' '}
       <Text style={styles.textParagrapha}>{range.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
       </View>
       </View>

       <View style={{ flexDirection:'row', alignItems:'center',
borderBottomColor:'#F5F5F5', borderBottomWidth:vh * 0.005, borderStyle: 'solid'}}>
  <Image  source={require('../assets/loansummary/clock.png')}
        style={{ width: vw * 0.070, height: vw * 0.070, marginLeft:15}} />
    <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Loan Duration</Text>
       <Text style={styles.textParagrapha}>{month} Month( s )</Text>
    </View>
    </View>

    <View style={{ flexDirection:'row', alignItems:'center',
}}>
  <Image  source={require('../assets/loansummary/interest-rate.png')}
        style={{ width: vw * 0.070, height: vw * 0.070, marginLeft:15 }} />
    <View style={{ alignItems:'flex-start'}}>
       <Text style={styles.textParagraph}>
       Loan Interest</Text>
       <Text style={styles.textParagrapha}> ₦{' '}
       <Text style={styles.textParagrapha}>{interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text></Text>
    </View>
    </View>

    
 
</View>
<View style={{width: '100%',
    
       
     alignItems: "center",
     justifyContent:"center",}}>
                        <TouchableOpacity  style={styles.submit} onPress={() => {
    navigation.navigate('Waiting', { bank, account, raiden, range, month, interest,bvn });
  }}>
                          <Text style={{fontSize: vw * 0.045   ,
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
    marginBottom: -vh * 0.025,
  },
  textHeading:{
    // color:'#22292F',
    color:'#22292F',
    fontSize: vw * 0.050 , 
    marginBottom: -0.008*vh,
    fontFamily:'Poppins-SemiBold', 
    paddingTop:0.012*vh,
    alignItems: 'center',
    textAlign:'center'
    
  },
  textParagraph:{
    
    fontSize: vw * 0.040,
    fontFamily:'Poppins-Regular',
    marginLeft:vw * 0.055 ,
    color:'#515151',
    alignItems: 'center',
    alignContent:'center',
    paddingTop:vh * 0.010,

    
    
  },
  textParagrapha:{
    
    fontSize: vw * 0.042,
    fontFamily:'Poppins-Regular',
    marginLeft:vw * 0.055  ,
    color:'#224b5f',
    alignItems: 'center',
    textAlign:'center',
    paddingBottom: vh * 0.010 
    
  },
  
  submit:{
    marginTop: 0.012*vh,
    height:0.065*vh,
    width: '85%',
    marginBottom: 0.045*vh,
    
   borderRadius: vw * 0.04,    
    backgroundColor:"#f44336",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    
  },
 
});
