import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../../utils/tailwind';

export const  Badge = ({ title, size = 'small' }) => {
    const viewSize = {
        small: 'px-2 py-1 m-0.5',
        medium: 'px-3 py-1.5 m-0.5',
        large: 'px-3.5 py-2 m-1',
    };

    const textSize = {
        small: 'text-xss',
        medium: 'text-xs',
        large: 'text-sm',
    };

    return (
        <View style={tw`bg-secondary rounded-lg ${viewSize[size]}`}>
            <Text style={tw`font-ms-semibold ${textSize[size]}`}>
                {title}
            </Text>
        </View>
    );
}
