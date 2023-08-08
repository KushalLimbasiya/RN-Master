import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen as HomeScreen001 } from '../screens/day001/HomeScreen';
import { HomeScreen as HomeScreen002 } from '../screens/day002/HomeScreen';
import { HomeScreen as HomeScreen003 } from '../screens/day003/HomeScreen';

import { theme } from '../theme';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const Day001StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen001} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  const Day002StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen002} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  const Day003StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen003} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  
  const RootStack = createNativeStackNavigator();
  const RootStackScreen = () => (
    <RootStack.Navigator initialRouteName={'Index'}>
      <RootStack.Screen name='Index' component={IndexScreen} options={{ headerShown: false }} />
      <RootStack.Screen name='Day001' component={Day001StackScreen} options={{ headerShown: false }} />
      <RootStack.Screen name='Day002' component={Day002StackScreen} options={{ headerShown: false }} />
      <RootStack.Screen name='Day003' component={Day003StackScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );

  const IndexButton = ({ text, onPress = undefined }) => {
    return (
      <TouchableOpacity
        style={{backgroundColor: theme.bg}}
        className='p-4 rounded-xl mt-3 border-2 border-[#8F61F2]'
        onPress={onPress}>
        <Text style={{ color: theme.text}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const IndexScreen = ({ navigation }) => {
    const navigateToStack = (stack, screen) => {
      navigation.navigate(stack, { screen: screen });
    };

    return (
      <View className='flex-1 bg-[#383B42]'>

        <View className="pt-20 px-10 mt-50">
          <Text className="text-xl font-extrabold text-[#F3F1EB]">React Native Learning</Text>
        </View>
        <ScrollView className="p-6">
          <IndexButton text={'DAY 001: Get Started'} onPress={() => navigateToStack('Day001', 'Home')} />
          <IndexButton text={'DAY 002: Core Components'} onPress={() => navigateToStack('Day002', 'Home')} />
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
