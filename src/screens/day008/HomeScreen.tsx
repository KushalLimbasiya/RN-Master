import React, {useRef} from 'react';
import { SafeAreaView, ScrollView, View, ImageBackground, Animated, useWindowDimensions, } from 'react-native';

const images = new Array(6).fill(
  require('../../../assets/images/c_cat.png'),
);

const HomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-bg">
      <View className="h-2/5 items-center justify-center">
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
        )}
        scrollEventThrottle={1}>
      {images.map((image, imageIndex) => {
        return (
          <View style={{width: windowWidth, height: 300}} key={imageIndex}>
            <ImageBackground source={image} className='flex-1 rounded-xl items-center justify-center overflow-hidden mx-8'>
            </ImageBackground>
          </View>
        );
      })}
    </ScrollView>
        <View className="items-center justify-center flex-row">
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                className="h-2 w-2 rounded bg-[#C0C0C0] mx-1"
                key={imageIndex}
                style={[{width}]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export { HomeScreen };