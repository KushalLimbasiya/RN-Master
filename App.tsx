import React from 'react';
import { View, Text, StatusBar, } from 'react-native';
import AppNavigation from './src/navigation';


const App = () => {

  return (
    <View className='flex-1' >
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#383B42" translucent = {true}/>

      <AppNavigation />
    </View>
  );
};

export default App;