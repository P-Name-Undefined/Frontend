import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../styles/colors';
import { styles } from './styles';

export const IconButton = ({
   icon,
   onPress,
   theme = 'light',
   iconSize = 24,
   customStyle,
}) => {
    return (
        <TouchableOpacity
            style={customStyle || styles.drawerButtonContainer}
            onPress={onPress}
        >
            <Icon name={icon} color={colors[theme]} size={iconSize} />
        </TouchableOpacity>
    );
};
