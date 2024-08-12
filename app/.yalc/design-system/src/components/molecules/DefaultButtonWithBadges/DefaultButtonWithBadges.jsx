import React from 'react';
import { Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import { DefaultButton } from '../../atoms/DefaultButton/DefaultButton';
import styles from '../../../styles/helpDescription';
import tw from "../../../utils/tailwind";

export const DefaultButtonWithBadges = ({
    title,
    onPress,
    badgeValue,
    marginTop = '',
    disabled,
}) => {
    return (
        <View style={tw`${marginTop}`}>
            <DefaultButton
                title={title}
                onPress={onPress}
                disabled={disabled}
            />
            <Badge
                value={<Text style={styles.labelBadge}>{badgeValue}</Text>}
                badgeStyle={[styles.badgeStyle, styles.smallBadge]}
                containerStyle={styles.containerBadge}
            />
        </View>
    );
};
