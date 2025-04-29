import { View, Text, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';

export default function IndexScreen() {

    return (
        <Redirect href={'auth/SignupScreen'} />
    );
}