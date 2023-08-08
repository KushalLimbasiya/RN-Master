import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native Styling!</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Styled Box</Text>
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
    <View style={styles.homeContainer}>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: theme.bg,
  },
  homeContainer: {
    backgroundColor: theme.bg,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: theme.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    color: 'white',
    fontSize: 18,
  },
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