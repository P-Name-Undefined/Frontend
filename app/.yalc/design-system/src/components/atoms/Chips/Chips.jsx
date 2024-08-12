import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../../styles/colors';
import tw from "../../../utils/tailwind";

export const Chips = ({
    title,
    icon,
    hiddenIcon = false,
    onPress,
    elevated = false,
    type,
    customStyle,
    disabled = false,
    selected = false,
  }) => {
    const [isSelected, setIsSelected] = useState(selected);
    const chipColor = isSelected ? 'bg-secondary-500 border-0' : 'bg-white';
    const elevatedStyle = elevated && 'shadow-lg shadow-black shadow-opacity-80';
    const disabledStyle = disabled && 'opacity-30';
    const childrenOrder = type === 'input' ? 'flex-row-reverse' : 'flex-row';

    const variantsAction = {
        button: () => onPress(),
        input: () => onPress(),
        filter: () => {
            onPress();
            setIsSelected(!isSelected);
        },
    };

    return (
        <Pressable
            onPress={variantsAction[type]}
            style={tw`px-3 py-2 ${customStyle} ${chipColor} ${disabledStyle} ${elevatedStyle} ${childrenOrder} rounded-lg items-center`}
            android_ripple={{
                color: colors.gray.DEFAULT,
            }}
            disabled={disabled}
        >
            {(!hiddenIcon || isSelected) && icon && (
                <Icon name={icon} size={16} />
            )}
            <Text style={tw`font-ms-semibold text-xs`}>{title}</Text>
        </Pressable>
    );
};
