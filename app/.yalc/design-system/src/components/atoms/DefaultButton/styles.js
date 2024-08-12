import {StyleSheet} from "react-native";
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
    pressable: {
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.DEFAULT,
    },
    bgPrimary: {
    },
    bgTransparent: {
        backgroundColor: 'transparent',
    },
    bgWhite: {
        backgroundColor: 'white',
    },
    textLight: {
        color: colors.light,
    },
    textBlack: {
        color: colors.black.DEFAULT,
    },
    textBlackBold: {
        color: colors.black.DEFAULT,
        fontWeight: 'bold',
    },
    textWithIcon: {
        marginLeft: 4,
    },
    disabled: {
        opacity: 0.7,
    },
    shadow: {
        shadowColor: colors.black.DEFAULT,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
    },
});