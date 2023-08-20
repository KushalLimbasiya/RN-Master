import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-1 justify-center items-center bg-bg">
            <LinearGradient colors={['rgba(157, 67, 199, 0.00)', 'rgba(199, 79, 236, 0.07)']} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                {/* Your content here */}
            <Text style={{ color: 'white', marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>React Navigation</Text>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'indigo', borderRadius: 8 }}
                onPress={() => navigation.navigate('Details')}
                >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>HomeScreen</Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

export { HomeScreen };
