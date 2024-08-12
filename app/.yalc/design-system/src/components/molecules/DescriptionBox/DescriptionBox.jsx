import React from 'react';
import { Text, View } from 'react-native';
import tw from "../../../utils/tailwind";

export const DescriptionBox = ({ title, description, maxLines = 4 }) => {
    return (
        <View style={tw`w-full`}>
            <Text style={tw.style(`absolute text-regular bg-white mx-1 px-1 z-10 my-2 text-black`, {
                fontWeight: "700"
            })}>
                {title}
            </Text>
            <View style={tw`border border-background py-4 px-2 relative rounded-lg w-full max-h-24 my-4 text-black`}>
                <Text
                    style={tw`text-xs font-ms-regular`}
                    numberOfLines={maxLines}
                >
                    {description}
                </Text>
            </View>
        </View>
    );
};
