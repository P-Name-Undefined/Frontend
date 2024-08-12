import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from '../../../utils/tailwind';

export const TextButton = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text
                style={tw`font-ms-bold text-primary text-base ${style}`}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};
