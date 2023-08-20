import { View, Text, TouchableOpacity,Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native"
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-bg">
      <LinearGradient colors={['rgba(157, 67, 199, 0.00)', 'rgba(199, 79, 236, 0.07)']} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-indigo p-2 px-5 rounded-lg ml-4 mt-4" 
          >
            <Icon name='angle-left' size={20} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View className='flex-1'>
        <View className='items-center mt-[90px]'>
          <Text className='text-white text-4xl font-normal'>Login</Text>
        </View>
        <View className='form space-y-2 px-8 mt-8'>
          <TextInput className='text-white mb-2 pl-6 rounded-2xl border-2 border-indigo' placeholder='Email'/>
          <TextInput className='text-white pl-6 rounded-2xl border-2 border-indigo' secureTextEntry placeholder='Password'/>
          <TouchableOpacity className='flex items-end mb-3'>
            <Text className='text-white-500 font-semibold text-xs'>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity className='mx-10 py-3 bg-purple rounded-3xl'>
            <Text className='font-bold text-center text-base text-white'>
              Submit
            </Text>
          </TouchableOpacity>
          <Text className="text-base text-white font-bold p-2 text-center ">Or</Text>
          <View className="justify-center">
            <TouchableOpacity className="flex-row p-1.5 mb-2 pl-6 rounded-2xl border-2 border-indigo">
              <Image source={require('../../../assets/icons/google.png')} className="w-7 h-7" />
              <Text className='pl-6 text-white text-base'>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row mt-2 p-1.5 mb-2 pl-6 rounded-2xl border-2 border-indigo">
              <Image source={require('../../../assets/icons/apple.png')} className="w-7 h-7" />
              <Text className='pl-6 text-white text-base'>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row p-1.5 mt-2 mb-14 pl-6 rounded-2xl border-2 border-indigo">
              <Image source={require('../../../assets/icons/facebook.png')} className="w-7 h-7" />
              <Text className='pl-6 text-white text-base'>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center pt-4">
              <Text className="text-white-500 font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity>
                  <Text className="font-semibold text-purple"> Sign Up</Text>
              </TouchableOpacity>
        </View>
        </View>

      </View>
      </LinearGradient>
    </View>
    
  )
}

export { HomeScreen };