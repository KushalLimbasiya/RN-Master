import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { HomeScreen as HomeScreen001 } from '../screens/day001/HomeScreen';
import { HomeScreen as HomeScreen002 } from '../screens/day002/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    
const Day001 = createNativeStackNavigator();
const Day001StackScreen = () => {
    <Day001.Navigator>
        <Day001.Screen name='Home' component={HomeScreen001} options={{headerShown: false}} />
    </Day001.Navigator>
}

const Day002 = createNativeStackNavigator();
const Day002StackScreen = () => {
    <Day002.Navigator>
        <Day002.Screen name='Home' component={HomeScreen001} options={{headerShown: false}} />
    </Day002.Navigator>
}
const RootStack = createNativeStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName={'Index'}>
    <RootStack.Screen name='Index' component={IndexScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day001' component={Day001StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day002' component={Day002StackScreen} options={{ headerShown: false }} />
  </RootStack.Navigator>
);    
      
const IndexButton = ({ text, onPress = undefined }) => {
    return (
      <TouchableOpacity
        style={{ backgroundColor: '#3498db', padding: 12, borderRadius: 8, marginBottom: 5 }}
        onPress={onPress}>
        <Text style={{ color: '#FFF' }}>{text}</Text>
      </TouchableOpacity>
    )
  }
  
const IndexScreen = ({navigation}) => {

    const navigateToStack = (stack: string, screen: string) => {
      navigation.navigate(stack, { screen: screen });
    }
  
    return (
      <View style={{ flex: 1 }}>
  
        {/*Header*/}
        <View style={{ paddingVertical: 20, paddingHorizontal: 10, marginTop: 50}}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Daily UI Design</Text>
        </View>
  
        {/*Body*/}
  
        <ScrollView style={{ padding: 12 }}>
          <IndexButton text={'DAY 001: Get Started'} onPress={() => navigateToStack('Day001', 'Home')} />
          <IndexButton text={'DAY 002: Credit Card Checkout'} onPress={() => navigateToStack('Day002', 'MyCart')} />
        </ScrollView>
  
  
      </View>
    );
  }
  
    return (
        
        <SafeAreaProvider>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    )
}

export default AppNavigation;