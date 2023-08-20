import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen as HomeScreen001} from '../screens/day001/HomeScreen';
import {HomeScreen as HomeScreen002} from '../screens/day002/HomeScreen';
import {HomeScreen as HomeScreen003} from '../screens/day003/HomeScreen';
import {HomeScreen as HomeScreen004} from '../screens/day004/HomeScreen';
import {HomeScreen as HomeScreen005} from '../screens/day005/HomeScreen';
import {HomeScreen as HomeScreen006} from '../screens/day006/HomeScreen';
import {DetailsScreen as DetailsScreen1} from '../screens/day006/DetailScreen';
import {HomeScreen as HomeScreen007} from '../screens/day007/HomeScreen';
import {HomeScreen as HomeScreen008} from '../screens/day008/HomeScreen';
import {HomeScreen as HomeScreen009} from '../screens/day009/HomeScreen';
import {HomeScreen as HomeScreen010} from '../screens/day010/HomeScreen';
import {HomeScreen as HomeScreen011} from '../screens/day011/HomeScreen';

import {theme} from '../theme';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const Day001StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen001} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day002StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen002} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day003StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen003} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day004StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen004} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day005StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen005} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day006StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen006} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const DetailsScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DetailsScreen1} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day007StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen007} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day008StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen008} options={{headerShown: false}} />
    </Stack.Navigator>
  );
  
  const Day009StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen009} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day010StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen010} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const Day011StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen011} options={{headerShown: false}} />
    </Stack.Navigator>
  );

  const RootStack = createNativeStackNavigator();
  const RootStackScreen = () => (
    <RootStack.Navigator initialRouteName={'Index'}>
      <RootStack.Screen name="Index" component={IndexScreen} options={{headerShown: false}}/>
      <RootStack.Screen name="Day001" component={Day001StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day002" component={Day002StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day003" component={Day003StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day004" component={Day004StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day005" component={Day005StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day006" component={Day006StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day007" component={Day007StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day008" component={Day008StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day009" component={Day009StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day010" component={Day010StackScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Day011" component={Day011StackScreen} options={{headerShown: false}} />
    </RootStack.Navigator>
  );

  const IndexButton = ({text, onPress = undefined}) => {
    return (
      <TouchableOpacity
        style={{backgroundColor: theme.bg}}
        className="p-4 rounded-xl mt-3 border-2 border-purple"
        onPress={onPress}>
        <Text style={{color: theme.text}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const IndexScreen = ({navigation}) => {
    const navigateToStack = (stack, screen) => {
      navigation.navigate(stack, {screen: screen});
    };

    return (
      <View className="flex-1 bg-[#383B42]">
        <View className="pt-20 px-10 mt-50">
          <Text className="text-xl font-extrabold text-[#F3F1EB]">
            React Native Learning
          </Text>
        </View>
        <ScrollView className="p-6" showsVerticalScrollIndicator={false}>
          <IndexButton text={'DAY 01: Get Started'} onPress={() => navigateToStack('Day001', 'Home')} />
          <IndexButton text={'DAY 02: Core Components'} onPress={() => navigateToStack('Day002', 'Home')}/>
          <IndexButton text={'DAY 03: React Native Styling'} onPress={() => navigateToStack('Day003', 'Home')} />
          <IndexButton text={'DAY 04: Flex Box, State and Props'} onPress={() => navigateToStack('Day004', 'Home')}/>
          <IndexButton text={'DAY 05: Style With Nativewind'} onPress={() => navigateToStack('Day005', 'Home')}/>
          <IndexButton text={'DAY 06: React Navigation'} onPress={() => navigateToStack('Day006', 'Home')}/>
          <IndexButton text={'DAY 07: React Animations'} onPress={() => navigateToStack('Day007', 'Home')}/>
          <IndexButton text={'DAY 08: Animated event'} onPress={() => navigateToStack('Day008', 'Home')}/>
          <IndexButton text={'DAY 09: FlastList'} onPress={() => navigateToStack('Day009', 'Home')}/>
          <IndexButton text={'DAY 10: SectionList'} onPress={() => navigateToStack('Day010', 'Home')}/>
          <IndexButton text={'DAY 11: Linear Gradient'} onPress={() => navigateToStack('Day011', 'Home')}/>
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