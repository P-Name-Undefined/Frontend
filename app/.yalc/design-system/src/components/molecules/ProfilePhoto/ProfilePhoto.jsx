import React from 'react';
import { Image } from 'react-native';
import tw from "../../../utils/tailwind";

export const ProfilePhoto = ({ base64, size, additionalStyle }) => {
    const imageSource = base64
        ? {
            uri: `data:image/png;base64,${base64}`,
        }
        : require('../../../assets/noImage.png');

    const sizes = {
        xs: 'w-10 h-10',
        sm: 'w-12 h-12',
        md: 'w-16 h-16',
        lg: 'w-24 h-24',
    };
    const selectedSize = sizes[size];
    return (
        <Image
            source={imageSource}
            style={tw`${selectedSize} rounded-full ${additionalStyle}`}
        />
    );
};
