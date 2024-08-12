import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from '../../../utils/tailwind';

export const TextSwitchButton = ({ text, isSelected, onPress }) => {
    const style = {
        container: isSelected ? 'bg-white' : 'bg-transparent',
        text: isSelected
            ? ' text-primary font-ms-semibold'
            : 'text-black font-ms-regular',
    };
    return (
        <TouchableOpacity
            onPress={onPress}
            style={tw`${style.container} px-6 py-1 w-1/2 rounded-full`}
        >
            <Text style={tw`${style.text} text-center text-sm`}>{text}</Text>
        </TouchableOpacity>
    );
};
