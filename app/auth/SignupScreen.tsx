import React, { useState } from "react";
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";

// Custom Components
import CustomTextInput from "@app/UI/CustomTextInput";
import CustomButton from "@app/UI/CustomButton";
import SocialAuthButton from "@app/UI/SocialAuthButton";

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        console.log({
            email,
            name,
            gender,
            birthdate,
            password,
            confirmPassword
        });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <CustomTextInput 
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <CustomTextInput 
                    value={name}
                    onChangeText={setName}
                    placeholder='Name'
                />
                <CustomTextInput 
                    value={gender}
                    onChangeText={setGender}
                    placeholder='Gender'
                />
                <CustomTextInput 
                    value={birthdate}
                    onChangeText={setBirthdate}
                    placeholder='Birdthdate (YYYY-MM-DD)'
                    keyboardType='numeric'
                />
                <CustomTextInput 
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <CustomTextInput 
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                />
                <CustomButton 
                    title='Sign Up'
                    onPress={handleSignup}
                />
                <View style={styles.socialContainer}>
                    <SocialAuthButton 
                        iconName='logo-apple'
                        onPress={() => console.log('Apple')}
                        iconColor="#000"
                    />
                    <SocialAuthButton 
                        iconName='logo-google'
                        onPress={() => console.log('Apple')}
                        iconColor="#000"
                    />
                    <SocialAuthButton 
                        iconName='logo-facebook'
                        onPress={() => console.log('Apple')}
                        iconColor="#000"
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    socialContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 16,
    },
});