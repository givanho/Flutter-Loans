import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'
import {vw, vh} from './MyDimensions'

const LoanDisbursed = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>
        Loan Disbursed
      </Text>
      <View >
      <Image  source={require('../assets/loandisbursed.png')}
          style={{ width: 0.41*vw, height: 0.25*vh}} />
          <View  style={{ width: vw * 0.3, height: vw * 0.35,backgroundColor:"#eee", borderRadius: 50,position:'absolute',
           transform: [{rotate: '45deg'},{translateY: vh * 0.08}],zIndex:-2
        }}>

          </View>
          <View  style={{ width: vw * 0.3, height: vw * 0.35,backgroundColor:"#eee", borderRadius: 50,position:'absolute',
           transform: [{rotate: '20deg'},{translateX: vh * 0.08}],zIndex:-2
        }}>

          </View>
      </View>
      <Text style={styles.textParagraph}>Your loan has been disbursed, you will get an alert from your bank in less than 5 minutes</Text>
      <Text>Return to{ " "}
      <Text
            style={{color: '#F44336', textDecorationLine: "underline"}}
            onPress={() => {
              navigation.navigate('Welcome');
            }}>
             Home
          </Text>
      </Text>
    </View>
  )
}

export default LoanDisbursed
const styles = StyleSheet.create({
  container: {
    flex:1,
    color: '#01566F',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    
   

  },
  textHeading:{
    color:'#22292F',
    fontSize: vw * 0.050 , 
    marginBottom: 0.025*vh,
    fontFamily:'Poppins-SemiBold', 
    
    alignItems: 'center',
    textAlign:'center'
    
  },
  textParagraph:{
    
    fontSize: vw * 0.035,
    fontFamily:'Poppins-Regular',
    width:'85%'
,    color:'#515151',
    alignItems: 'center',
    textAlign:'center',
    paddingBottom: 0.015*vh
    
  },
})