import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme';


const HomeScreen = () => {
  const [flexDirection, setflexDirection] = useState('column');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [alignContent, setAlignContent] = useState('flex-start');

  const handleFlexDirectionChange = (value) => {
    setflexDirection(value);
  };

  const handleJustifyContentChange = (value) => {
    setJustifyContent(value);
  };

  const handleAlignItemsChange = (value) => {
    setAlignItems(value);
  };

  const handleAlignContentChange = (value) => {
    setAlignContent(value);
  };

  return (
    <ScrollView
        style={{ flex: 1, backgroundColor: theme.bg, marginTop: 30 }}
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.container}>
            <View style={styles.controls}>
            <ControlPanel
                label="flexDirection"
                values={['column', 'row', 'row-reverse', 'column-reverse']}
                selectedValue={flexDirection}
                onSelect={handleFlexDirectionChange}
                />
            <ControlPanel
                label="justifyContent"
                values={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
                selectedValue={justifyContent}
                onSelect={handleJustifyContentChange}
                />
            <ControlPanel
                label="alignItems"
                values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
                selectedValue={alignItems}
                onSelect={handleAlignItemsChange}
                />
            <ControlPanel
                label="alignContent"
                values={['flex-start', 'flex-end', 'stretch', 'center', 'space-between', 'space-around']}
                selectedValue={alignContent}
                onSelect={handleAlignContentChange}
                />
            </View>
            <View style={[styles.flexContainer, { flexDirection, justifyContent, alignItems, alignContent }]}>
            <FlexItem backgroundColor="powderblue" />
            <FlexItem backgroundColor="skyblue" />
            <FlexItem backgroundColor="steelblue" />
            <FlexItem backgroundColor="orangered" />
            <FlexItem backgroundColor="orange" />
            <FlexItem backgroundColor="mediumseagreen" />
            <FlexItem backgroundColor="deepskyblue" />
            <FlexItem backgroundColor="mediumturquoise" />
            <FlexItem backgroundColor="mediumslateblue" />
            <FlexItem backgroundColor="purple" />
            </View>
        </View>
    </ScrollView>
  );
};

const ControlPanel = ({ label, values, selectedValue, onSelect }) => (
    <View style={styles.controlPanel}>
      <Text style={styles.controlLabel}>{label}</Text>
      <View style={styles.controlButtons}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => onSelect(value)}
            style={[
              styles.controlButton,
              selectedValue === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
);
  

const FlexItem = ({ backgroundColor }) => (
  <View style={[styles.flexItem, { backgroundColor }]} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  controls: {
    marginBottom: 20,
  },
  controlPanel: {
    marginBottom: 10,
  },
  controlLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: theme.text,
    fontWeight: '800',
  },
  controlButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  controlButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#f2edff',
    alignSelf: 'flex-start',
    marginHorizontal: 5,
    marginBottom: 6,
    minWidth: '30%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: theme.purple,
    color: theme.text,
  },
  selectedLabel: {
    color: theme.text,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.purple,
  },
  flexContainer: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'flex-start',
  },
  flexItem: {
    width: 40,
    height: 40,
    margin: 5,
  },

});

export { HomeScreen };