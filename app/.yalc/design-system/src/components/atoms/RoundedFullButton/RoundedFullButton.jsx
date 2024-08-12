import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from '../../../utils/tailwind';

export const RoundedFullButton = ({
  text,
  onPress,
  variant = 'primary',
  disabled = false,
  width,
}) => {
    const variantStyles = {
        primary: 'bg-primary text-white',
        secondary: 'bg-white text-primary border border-1 border-primary border-opacity-100',
        danger: 'bg-danger text-white',
        warning: 'bg-thirt-rank text-black',
    };

    const selectedVariant = variantStyles[variant];

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Text
                style={tw`${selectedVariant} ${width} px-7 py-2 rounded-full text-sm font-ms-semibold text-center`}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};
