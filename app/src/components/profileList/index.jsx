import React from 'react';
import { View, Pressable } from 'react-native';
import styles from './styles';
import { UserListItem } from '../molecules/UserListItem';
import { Divider } from 'mia-auda-design-system';
import { useNavigation } from '@react-navigation/native';

export default function ProfileList({ usersProfile, filterList = false }) {
    const navigation = useNavigation();

    const filteredUsers = filterList
        ? usersProfile?.filter((user) => user.cpf)
        : usersProfile;

    const handlenavigate = (profile) => {
        navigation.navigate('socialUserProfile', {
            userId: profile.userId,
        });
    };

    return (
        <View style={styles.userList}>
            {filteredUsers?.map((profile, i) => (
                <Pressable
                    key={profile._id}
                    android_ripple={{ color: '#F2F2F2' }}
                    onPress={() => handlenavigate(profile)}
                >
                    <UserListItem user={profile} />
                    {i != filteredUsers.length - 1 && <Divider />}
                </Pressable>
            ))}
        </View>
    );
}
