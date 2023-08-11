import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
    renderItem: ({ item }) => {
      return <Text className='bg-bg border-2  border-purple rounded-2xl p-3 mx-4 mb-4 text-white text-center'>{item.text}</Text>
    },
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
    renderItem: ({ item }) => <Text className='bg-bg border-2 border-purple rounded-2xl mx-4 p-3 mb-4 text-white text-center'>{item.text}</Text>,
  },
]

 const HomeScreen = () => {
  return (
    <View className='flex-1 bg-bg'>
        <View className='flex-1 p-10 mt-10'>
            
        <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => {
            return <View className='px-8'><Text className='p-5 mb-6 rounded-xl font-bold border-b-4 border-purple text-white text-xl text-center'>{section.title}</Text></View>
            }}
            keyExtractor={(item) => item.id}
            />
        </View>
    </View>
  )
}

export { HomeScreen };