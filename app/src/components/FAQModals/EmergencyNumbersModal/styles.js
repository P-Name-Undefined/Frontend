import { StyleSheet } from 'react-native';
import colors from '../../../../assets/styles/colorVariables';

const minimumTextSize = 16;

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },

    modalContent: {
        paddingTop: 50,
        backgroundColor: colors.light,
        padding: 20,
        marginBottom: 50,
        borderRadius: 20,
        top: '2.5%',
    },

    title: {
        alignSelf: 'center',
        marginBottom: 10,
        fontFamily: 'montserrat-semibold',
        color: colors.primary,
        fontSize: minimumTextSize * 1.5,
    },

    description: {
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'montserrat-semibold',
        color: colors.primary,
        fontSize: minimumTextSize * 1.2,
    },

    icon: {
        top: '5.5%',
        right: 20,
        position: 'absolute',
        zIndex: 5,
    },
});

export default styles;
