import { Slot } from 'expo-router';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style='dark' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Slot />
            </View>
        </SafeAreaView>
    );
}