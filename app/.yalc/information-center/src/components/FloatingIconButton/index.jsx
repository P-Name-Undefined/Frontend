import React from 'react';
import { View } from 'react-native';
import { CircleIconButton } from 'design-system';
import tw from '../../utils/tailwind';

export const FloatingIconButton = ({
    position = 'left',
    iconName,
    onPress,
    customTop = null,
    iconSize,
    color,
}) => {
    const convertPosition = `${position}-2`;
    const positionY = customTop || 'top-2';
    return (
        <View style={tw`absolute z-10 ${positionY} ${convertPosition}`}>
            <CircleIconButton
                icon={iconName}
                onPress={onPress}
                iconSize={iconSize}
                color={color}
            />
        </View>
    );
};
