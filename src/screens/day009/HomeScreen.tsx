import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { theme } from '../../theme';

const HomeScreen = () => {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  return (
    <View className='flex-1 bg-bg'>
        <View className='mt-10 p-4'>
        <FlatList 
            numColumns={2}
            keyExtractor={(item) => item.id} 
            data={people} 
            renderItem={({ item }) => ( 
                <View className='flex-1 bg-indigo justify-between m-3 p-5 rounded-xl text-center'>
                <Text className='text-white font-semibold text-xl text-center capitalize'>{item.name}</Text>
            </View>
            )}
            />
        </View>
    </View>
  );
}

export { HomeScreen };