import React from 'react';
import { View } from 'react-native';
import tw from '../../../utils/tailwind';

export const ViewWithDivider = ({ children }) => {
    return <View style={tw`border-b border-b-gray-200 py-4`}>{children}</View>;
};
