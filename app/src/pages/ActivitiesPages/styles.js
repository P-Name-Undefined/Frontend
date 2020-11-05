import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../../assets/styles/colorVariables';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },

    helpList: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },

    tabContainer: {
        backgroundColor: colors.primary,
    },

    tabLabel: {
        color: colors.light,
    },

    tabIndicator: {
        backgroundColor: colors.light,
        padding: 2,
    },

    loadingContainer: {
        height: '100%',
        justifyContent: 'center',
    },
});

export default styles;
