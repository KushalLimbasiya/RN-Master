import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View className='flex-1 bg-bg justify-center items-center'>
      <Text className='text-white mb-10 text-xl font-semibold'>React Navigation</Text>
      <TouchableOpacity 
        className='p-6 bg-indigo rounded-xl'
        onPress={() => navigation.navigate('Details')}
        >
            <Text className='text-white font-semibold'>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}
export { HomeScreen };