import React from 'react';
import { Badge } from '../Badge/Badge';
import { View } from 'react-native';
import tw from '../../../utils/tailwind';

export const CategoriesList = ({
       categories,
       size = 'medium',
       customStyle = '',
   }) => {
    const align = categories?.length >= 3 ? 'justify-center' : '';
    return (
        <View style={tw`flex flex-row flex-wrap ${align} ${customStyle}`}>
            {categories?.map((category) => (
                <Badge title={category.name} key={category._id} size={size} />
            ))}
        </View>
    );
};
