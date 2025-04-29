import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Custom UI
import CustomButton from '../UI/CustomButton';
import { } from './LoginScreen'

export default function EntryScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Struklio</Text>
                <Text style={styles.subtitle}>Native no-code full-stack builder</Text>
            </View>
            <CustomButton 
                title='Continue'
                onPress={() => {
                    router.push('./LoginScreen')
                }}
                textStyle={{ fontSize: 18 }}
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 24,
        textAlign: 'center',
    },
    button: {
        alignSelf: 'stretch',
        marginBottom: 16,
    }
});