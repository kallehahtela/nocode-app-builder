import { View, Text, StyleSheet } from 'react-native';

// Custom Components
import { useAuth } from '@app/hooks/useAuth';
import CustomButton from '@app/UI/CustomButton';

export default function LoginScreen() {
    const { login } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <CustomButton 
                title='Login'
                onPress={() => console.log('login pressed')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});