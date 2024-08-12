import React from 'react';
import { Image, Text, View } from 'react-native';
import { Divider } from '../../atoms/Divider/Divider';
import tw from "../../../utils/tailwind";

export const TimeLineItem = ({ data, hasImage }) => {
    return (
        <View style={tw`-mt-2 mb-2 w-full`}>
            <View style={tw`flex-row mb-2`}>
                {hasImage && (
                    <Image
                        source={{
                            uri: `data:image/png;base64,${data.icon}`,
                        }}
                        style={tw`rounded-full h-10 w-10`}
                    />
                )}
                <View style={tw`flex-1 ml-2`}>
                    <Text style={tw`font-ms-bold text-black mb-[0.5px]`}>
                        {data.title}
                    </Text>
                    <Text style={tw`font-ms-regular text-black text-xs`}>
                        {data.description}
                    </Text>
                </View>
            </View>
            <Divider marginHorizontal={4} />
        </View>
    );
};
