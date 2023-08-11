import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const DetailsScreen = () => {
    const navigation = useNavigation();
  return (
    <View className='flex-1 bg-bg justify-center items-center'>
      <TouchableOpacity 
        className='p-6 bg-indigo rounded-xl mt-12'
        onPress={() => navigation.goBack()}
        >
            <Text className='text-white font-semibold'>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}
export { DetailsScreen };