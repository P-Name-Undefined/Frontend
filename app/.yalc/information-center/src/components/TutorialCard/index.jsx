import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import colors from '../../styles/colors';
import blueCat from "../../assets/blueCat.png";
import styles from './style';
import tw from '../../utils/tailwind';
export const TutorialCard = ({
    title,
    description,
    onPress,
    margin = '',
    leftAligment = true,
}) => {
    const flexRow = leftAligment ? 'flex-row' : 'flex-row-reverse';
    return (
        <Pressable
            android_ripple={{
                color: colors.gray.contrast,
            }}
            onPress={onPress}
            style={tw`w-full ${flexRow} bg-white rounded-lg shadow-md border-[0.5px] border-black-100 p-4 items-center justify-between ${margin} h-40`}
        >
            <Image
                source={blueCat}
                style={styles.image}
            />
            <View style={tw`w-3/4`}>
                <Text style={tw`font-ms-semibold text-base text-black`}>
                    {title}
                </Text>
                <Text style={tw`font-ms-regular text-black`}>
                    {description}
                </Text>
            </View>
        </Pressable>
    );
};
