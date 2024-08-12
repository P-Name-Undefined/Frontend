import {StyleSheet} from "react-native";
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
    pressable: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        alignItems: 'center',
    },
    bgSecondary: {
        backgroundColor: colors.secondary[500],
        borderWidth: 0,
    },
    bgWhite: {
        backgroundColor: 'white',
    },
    elevated: {
        shadowColor: colors.black.DEFAULT,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    disabled: {
        opacity: 0.3,
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexRowReverse: {
        flexDirection: 'row-reverse',
    },
    text: {
        fontFamily: 'ms-semibold',
        fontSize: 12,
    },
});
