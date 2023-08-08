import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

type CatProps = {
    name: string;
};
  
const Cat1 = (props: CatProps) => {
    return (
    <View>
        <Text>Hello, I am {props.name}!</Text>
    </View>
    );
};

  
const HomeScreen = () => {
  return (
    <View className='mt-3 px-8'>
        <Text>this is Second view</Text>
        <Text className='mt-4 text-white'>Here is props used</Text>
        <Cat1 name="kushal" />
        <Cat1 name="vishal" />
        <Cat1 name="rohan" />
        <Text className='text-white mt-3'>here is image</Text>
        <Image
          source={require("../../../assets/images/p_cat2.png")}
          className=''
          style={{width: 200, height: 200}}
        />
    </View>
  );
};

export { HomeScreen };