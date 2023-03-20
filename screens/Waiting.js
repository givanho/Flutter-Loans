import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Animated ,StyleSheet,BackHandler, Text,Easing} from 'react-native';

import Lottie from 'lottie-react-native';
import {vw, vh} from './MyDimensions'


export default function MyComponent({navigation, route: { params } }) {
  const { bank, account, raiden, range,
    month,
    interest,bvn } = params;

  const[isVisible, SetIsVisible] = useState(null)

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

  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.navigate("Granted");
      SetIsVisible(true)
    }, 10000);
    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Granted', { bank, account, raiden, range, month, interest,bvn });
      SetIsVisible(true)
    }, 13000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <View style={[StyleSheet.absoluteFill]}>
      {isVisible ? <View style={{width:'50%', height:'100%',flexDirection:'column',
        justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center',}}>
      <View style={{width:0.1*vh, height:0.1*vh,
     alignItems:'center',alignContent:'center',alignSelf:'center',}}>
      <Lottie source={require('../assets/animation/checked.json')}
        style={{
        justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center',}}
        colorFilters={[
        {
          keypath: 'Shape Layer 1',
          color: '#224b5f',
        },
      ]}  autoPlay loop={false} />
      </View>
      <View>
      <Text  style={styles.textParagrapha}>Loan Granted</Text>
      <Text  style={styles.textParagraphb}>Your loan apllication of {range} was successfully granted</Text>
      </View>
    </View>  : <View style={{ alignItems:'center',alignContent:'center',alignSelf:'center',height:'100%',
      justifyContent:'center', flexDirection:'column'}}>
      <View style={{ alignItems:'center',alignContent:'center',alignSelf:'center',
      justifyContent:'space-around',height:'40%',}}>
        <View>
      <Text style={styles.textParagrapha}>Evaluating Your Loan </Text>
      <Text style={styles.textParagraphb}>Please wait... </Text>
      </View>

      <View style={{width:'50%', height:'50%',
      justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center',
      }}>
      <View  style={{width:'100%',flexDirection:'column',
      justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center',
      }}>
      <Lottie source={require('../assets/animation/woman.json')}
       style={{width:'100%',justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center',
       }}
        colorFilters={[
        {
          keypath: 'Shape Layer 1',
          color: '#224b5f',
          
        },
       
      ]}  autoPlay loop  />
      </View>
     <View style={{width:'100%',
       }}>
     <Lottie source={require('../assets/animation/loaderbar.json')}
     progress={animationProgress.current}
     style={{width:'60%',top:-0.02*vh}}
        colorFilters={[
        {
          keypath: 'Shape Layer 1',
          color: '#224b5f',
          
        },
       
      ]}  autoPlay loop={false} />
      </View>
      </View>
      </View>
    
    </View> }

    
    </View>
  );
}
const styles = StyleSheet.create({
  button:{
    
    height:'100%',
    width: '100%',
    
    alignItems:'center'
    
    
  
    
  }, textParagrapha:{
    
    fontSize: vw * 0.048,
    fontFamily:'Poppins-Regular',
    color:'#224b5f',
    alignSelf:'center',
    textAlign: 'center'
    
    
  },
  textParagraphb:{
    
    fontSize: vw * 0.032,
    fontFamily:'Poppins-Regular',
    alignContent:'center',
    alignItems: 'center',
    textAlign:'center',
    
    
  },
})