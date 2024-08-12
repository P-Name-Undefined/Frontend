import React from 'react';
import { Text } from 'react-native';
import tw from '../../../utils/tailwind';

export const SliderDescription = ({ description }) => {
    return (
        <Text style={tw`font-ms-regular text-base px-4 text-black text-center`}>
            {description}
        </Text>
    );
};
