import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';
import { theme } from '../../theme';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim, 
      }}>
      {props.children}
    </Animated.View>
  );
};

const HomeScreen = () => {
  return (
    <View className='flex-1 items-center justify-center bg-bg'>
      <FadeInView
        style={{
          width: 250,
          height: 60,
          backgroundColor: theme.purple,
          justifyContent: 'center',
        }}>
        <Text className="text-xl text-center text-white font-semibold">
          Fading in
        </Text>
      </FadeInView>
    </View>
  );
};

export { HomeScreen };