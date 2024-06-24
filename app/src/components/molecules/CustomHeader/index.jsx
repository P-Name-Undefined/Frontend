import React from 'react';
import { Text, View } from 'react-native';
import { IconButton } from '../../atoms/IconButton';
import { styles } from './styles';
import { RoundedFullButton } from '../../atoms/RoundedFullButton';
import WalkthroughTooltip from '../../WalkthroughTooltip';

export const CustomHeader = ({ title, navigation, iconType, buttonProps }) => {
    const isDrawerButton = iconType == 'drawer';
    const icon = isDrawerButton
        ? {
              icon: 'menu',
              theme: 'light',
              customStyle: styles.customMenuStyle,
          }
        : {
              icon: 'arrow-back',
              theme: 'dark',
          };

    const onPress = isDrawerButton
        ? () => navigation.openDrawer()
        : () => navigation.goBack();

    return (
        <View style={styles.header}>
            <View style={styles.content}>
                <WalkthroughTooltip
                    incomingWalkthroughStep={8}
                    placement="bottom"
                >
                    <IconButton
                        onPress={onPress}
                        style={styles.icon}
                        {...icon}
                    />
                </WalkthroughTooltip>
                <Text style={styles.title}>{title}</Text>
                {buttonProps?.visible && (
                    <View className="absolute right-2">
                        <RoundedFullButton {...buttonProps} />
                    </View>
                )}
            </View>
        </View>
    );
};
