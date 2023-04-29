import { Text, View } from 'react-native';
import { styles } from './styles';
import { useContext } from 'react';
import { SocialNetworkProfileContext } from '../../../store/contexts/socialNetworkProfileContext';
import { LoadingContext } from '../../../store/contexts/loadingContext';
import { UpdaterContext } from '../../../store/contexts/updaterContext';
import shortenName from '../../../utils/shortenName';
import { RoundedFullButton } from '../../atoms/RoundedFullButton';
import { UserContext } from '../../../store/contexts/userContext';
import { ProfilePhoto } from '../ProfilePhoto';

export const UserListItem = ({ user }) => {
    const { followUser, unfollowUser } = useContext(
        SocialNetworkProfileContext,
    );
    const { setIsLoading } = useContext(LoadingContext);
    const { setShouldUpdate } = useContext(UpdaterContext);
    const userContext = useContext(UserContext);

    const { isFollowing } = user;

    const userPhoto = user.photo || user.user?.photo;
    const isTheSameUser = userContext.user._id == user.userId;

    const handleClickButton = async () => {
        setIsLoading(true);
        isFollowing ? await followUser(user._id) : await unfollowUser(user._id);
        setShouldUpdate(true);
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
