import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { theme } from '../../theme';

const HomeScreen = () => {
  return (
    <View
      style={{backgroundColor: theme.bg}}
      className='flex-1 justify-center items-center'>
      <StatusBar barStyle="light-content" translucent backgroundColor={'transparent'} />
      <Text>This is text</Text>
    </View>
  )
}

export { HomeScreen };