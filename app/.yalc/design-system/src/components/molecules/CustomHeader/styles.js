import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { oldColors } from '../../../styles/oldColors';
import fonts from '../../../styles/fonts';

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: RFValue(48, 640),
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        ...fonts.subtitle,
        color: oldColors.dark,
        fontFamily: 'montserrat-bold',
    },
    customMenuStyle: {
        backgroundColor: oldColors.primary,
        padding: RFValue(4, 640),
        marginRight: RFValue(8, 640),
        marginLeft: RFValue(8, 640),
        borderRadius: 100,
    },
});
