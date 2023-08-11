import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

const HomeScreen = () => {
  return (
    <View className='flex-1 items-center justify-center mt-5 p-5 bg-bg'>
      <Text className='text-2xl font-bold mb-5'>Hello, React Native Styling!</Text>
      <View className="w-52 h-24 bg-purple justify-center items-center rounded-xl">
        <Text className='text-white text-xl'>Styled Box</Text>
      </View>

      <App />
    </View>
  );
};

const App = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted((prev) => !prev);
  };

  return (
    <View className='bg-bg mt-7'>
      <Text
        style={[
          styles.text,
          isHighlighted && styles.highlightedText,
          styles.centerText, 
        ]}
      >
        React Native Styling Example
      </Text>

      <TouchableOpacity
        style={[styles.button, isHighlighted && styles.highlightedButton]}
        onPress={toggleHighlight}
      >
        <Text style={[styles.buttonText, styles.centerText]}>
          {isHighlighted ? 'Unhighlight' : 'Highlight'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  highlightedText: {
    color: theme.purple,
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.purple,
    borderRadius: 5,
    marginTop: 10,
  },
  highlightedButton: {
    backgroundColor: theme.purple,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export { HomeScreen };