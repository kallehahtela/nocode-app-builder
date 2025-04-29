import React from 'react';
import { Slot } from 'expo-router';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Custom Components
import EntryScreen from '@app/auth/EntryScreen';
import LoginScreen from '@app/auth/LoginScreen';

export default function RootLayout() {
    return (
        <AuthProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style='dark' />
                <Slot />
            </SafeAreaView>
        </AuthProvider>
    );
}