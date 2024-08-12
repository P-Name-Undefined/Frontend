import colors from '../../../styles/colors';
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    circle: {
        borderRadius: 9999,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgFirstRank: {
        backgroundColor: colors["first-rank"],
    },
    bgSecondRank: {
        backgroundColor: colors["second-rank"],
    },
    bgThirdRank: {
        backgroundColor: colors["thirt-rank"],
    },
    bgGray: {
        backgroundColor: colors.gray.DEFAULT,
    },
});