import React from "react";
import { TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomTextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    style?: ViewStyle;
    inputStyle?: TextStyle;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric';
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    value,
    onChangeText,
    placeholder,
    style,
    inputStyle,
    secureTextEntry = false,
    keyboardType = 'default',
}) => {
    return (
        <TextInput 
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.input, style, inputStyle]}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});

export default CustomTextInput;