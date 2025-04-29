import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SocialAuthButtonProps {
    iconName: keyof typeof Ionicons.glyphMap; // Valid iconName
    onPress: () => void;
    style?: ViewStyle;
    iconColor?: string;
    iconSize?: number;
}

const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
    iconName,
    onPress,
    style,
    iconColor = '#000',
    iconSize = 24,
}) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginVertical: 8,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
});

export default SocialAuthButton;