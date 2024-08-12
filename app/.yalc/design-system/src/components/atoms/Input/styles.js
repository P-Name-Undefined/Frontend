import {StyleSheet} from "react-native";
import colors from "../../../styles/colors";


export const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontFamily: 'ms-semibold',
        color: colors.black.DEFAULT,
        marginVertical: 4,
    },
    disabledInput: {
        borderColor: colors.gray.DEFAULT,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: colors.background,
        paddingVertical: 8,
        paddingHorizontal: 16,
        color: colors.black.DEFAULT,
        fontFamily: 'ms-medium',
    },
    enabledInput: {
        borderColor: colors.gray.DEFAULT,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 16,
        color: colors.black.DEFAULT,
        fontFamily: 'ms-medium',
    },
    maxLength: {
        marginLeft: 'auto',
        fontFamily: 'ms-regular',
        fontSize: 12,
    },
    errorMessage: {
        fontSize: 14,
        color: colors.danger.DEFAULT,
    },
});
