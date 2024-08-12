import React from 'react';
import { Text } from 'react-native';
import tw from '../../../utils/tailwind';

export const SliderTitle = ({ title }) => {
    return (
        <Text style={tw`font-ms-semibold text-xl px-4 text-primary text-center mb-4`}>
            {title}
        </Text>
    );
};
