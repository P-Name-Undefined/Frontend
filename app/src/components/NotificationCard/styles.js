import { StyleSheet } from 'react-native';

import colors from '../../../assets/styles/colorVariables';

export default StyleSheet.create({
    cardContainer: {
        maxWidth: 740,
        maxHeight: 240,

        marginTop: 15,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,

        backgroundColor: colors.light,
        borderRadius: 8,

        flexDirection: 'row',

        paddingVertical: 15,

        width: '100%',
    },

    iconContent: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        marginLeft: 15,
        borderRadius: 50,
        backgroundColor: colors.primary,
        elevation: 1,
    },

    info: {
        marginLeft: 15,
        width: '75%',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    time: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: '400',
    },
});
