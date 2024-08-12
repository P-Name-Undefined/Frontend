import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { oldColors } from '../../../styles/oldColors';
import fonts from '../../../styles/fonts';

const commonContainerStyle = {
    width: '100%',
    flexDirection: 'row',
    marginVertical: RFValue(4, 640),
    maxWidth: RFValue(240, 640),
    overflow: 'hidden',
    paddingVertical: RFValue(8, 640),
};
export const styles = StyleSheet.create({
    drawerItemContainer: {
        marginLeft: RFValue(16, 640),
        ...commonContainerStyle,
    },
    selectedDrawerItemContainer: {
        ...commonContainerStyle,
        backgroundColor: oldColors.primaryLowOpacity,
        paddingHorizontal: RFValue(4, 640),
        marginLeft: RFValue(12, 640),
        borderRadius: 4,
    },
    label: {
        ...fonts.body,
        marginLeft: RFValue(16, 640),
    },
});
