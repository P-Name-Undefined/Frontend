import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from "../../../utils/tailwind";

export const FollowCount = ({ count, type, userId }) => {
    const navigation = useNavigation();
    const types = {
        following: 'seguindo',
        followers: 'seguidores',
    };

    const handlePress = () => {
        navigation.navigate('userList', { userId: userId, followType: type });
    };

    return (
        <TouchableOpacity style={tw`flex-row mx-2`} onPress={handlePress}>
            <Text style={tw`font-ms-bold text-base`}>{count}</Text>
            <Text style={tw`font-ms-regular text-base`}>{` ${types[type]}`}</Text>
        </TouchableOpacity>
    );
};
