import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SocialNetworkProfileContext } from '../../../store/contexts/socialNetworkProfileContext';
import { LoadingContext } from '../../../store/contexts/loadingContext';
import shortenName from '../../../utils/shortenName';
import { RoundedFullButton, ProfilePhoto } from 'mia-auda-design-system';
import { UserContext } from '../../../store/contexts/userContext';

export const UserListItem = ({ user }) => {
    const { followUser, unfollowUser } = useContext(
        SocialNetworkProfileContext,
    );
    const { setIsLoading } = useContext(LoadingContext);
    const userContext = useContext(UserContext);

    const { isFollowing } = user;

    const userPhoto = user.photo || user.user?.photo;
    const isTheSameUser = userContext.user._id == user.userId;

    const handleClickButton = async () => {
        setIsLoading(true);
        isFollowing ? await followUser(user._id) : await unfollowUser(user._id);
    };

    const buttonInfo = {
        text: isFollowing ? 'Seguindo' : 'Seguir',
        type: isFollowing ? 'secondary' : 'primary',
    };

    return (
        <View style={styles.container}>
            <ProfilePhoto base64={userPhoto} size={'sm'} />
            <View style={styles.userInfo}>
                <Text
                    style={styles.userName}
                    numberOfLines={1}
                    className={'w-36'}
                >
                    {shortenName(user.username)}
                </Text>
            </View>
            {!isTheSameUser && (
                <RoundedFullButton
                    text={buttonInfo.text}
                    onPress={handleClickButton}
                    variant={buttonInfo.type}
                    width={'min-w-[35%]'}
                />
            )}
        </View>
    );
};
