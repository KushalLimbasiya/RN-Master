import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import { theme } from '../../theme';

const Cat = () => {
  return (
    <View>
      <Text>I am Cat!</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: theme.bg, flex:1}}>
      <View className='mt-12 px-8'>
        <Text>this is First view</Text>
      </View>
      <View className='mt-3 px-8'>
        <Text>this is Second view</Text>
      </View>
      <View className='flex-1 mt-3 px-8'>
        <Text className='text-white '>this is custome component</Text>
        <Text className='text-white mt-3'>this is text</Text>
        
        <Text className='text-white mt-3'>here is Text Input</Text>
        <TextInput
          className='px-3 mt-3 border-2 border-white'
          placeholder="You can type here"
        />
        <Text className='mt-4 text-white'>Here is custome cat component</Text>
        <Cat />
        <Cat />
        <Cat />

      </View>

    </View>
  );
};

export { HomeScreen };