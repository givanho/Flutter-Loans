import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import {vw, vh} from "../screens/MyDimensions"

const SlidingText = ({ textList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateY = useRef(new Animated.Value(0)).current;
    const [opacity, setOpacity] = useState(1);
  
    useEffect(() => {
      const animation = Animated.timing(translateY, {
        toValue: -10,
        duration: 3500,
        useNativeDriver: true,
      });
  
      animation.start(() => {
        setOpacity(0);
        setCurrentIndex((currentIndex + 1) % textList.length);
        translateY.setValue(0);
        setOpacity(1);
      });
    }, [currentIndex]);
  
    return (
      <View>
        <Animated.View
          style={{
            transform: [{ translateY }],
            opacity,
          }}>
          <Text style={{
            fontFamily:'Poppins-SemiBold',
    
            color:'#224b5f',
            alignItems: 'center',
            textAlign:'center',
            paddingTop: 20, 
            fontSize: vw * 0.032,
        
          }}>{textList[currentIndex]}</Text>
        </Animated.View>
      </View>
    );
  };
  export default SlidingText;