import React, { useState, useContext } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Linking,
    Platform,
} from 'react-native';
import { Icon } from 'react-native-elements';
import ConfirmationModal from '../../../../components/modals/confirmationModal';
import Button from '../../../../components/UI/button';
import getYearsSince from '../../../../utils/getYearsSince';
import styles from './styles';
import HelpService from '../../../../services/Help';
import { alertSuccess } from '../../../../utils/Alert';
import { UserContext } from '../../../../store/contexts/userContext';
import useService from '../../../../services/useService';
import shortenName from '../../../../utils/shortenName';
import { Badge } from 'react-native-elements';

export default function OfferHelpDescription({ route, navigation }) {
    const { helpOffer } = route.params;
    const { user } = useContext(UserContext);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(
        false,
    );
    const [isFinishRequestLoading, setFinishRequestLoading] = useState(false);
    const goBackToMyOfferedHelpPage = () => navigation.goBack();
    const helpOwnerPhoto = helpOffer.user.photo || user.photo;

    function openGoogleMaps() {
        const scheme = Platform.select({
            ios: 'maps:0,0?q=',
            android: 'geo:0,0?q=',
        });
        const helpLatitude = helpOffer.user.location.coordinates[1];
        const helpLongitude = helpOffer.user.location.coordinates[0];

        const helpCoordinates = `${helpLatitude},${helpLongitude}`;
        const helpLabel = 'Pedido de Ajuda de ' + helpOffer.user.name;
        const url = Platform.select({
            ios: `${scheme}${helpLabel}@${helpCoordinates}`,
            android: `${scheme}${helpCoordinates}(${helpLabel})`,
        });
        Linking.openURL(url);
    }

    function openWhatsapp() {
        Linking.openURL(
            `whatsapp://send?phone=${
                helpOffer.user.phone
            }&text=${'Olá, precisa de ajuda?'}`,
        );
    }

    async function finishHelp() {
        setFinishRequestLoading(true);
        const finishHelpRequest = await useService(
            HelpService,
            'finishHelpByHelper',
            [helpOffer._id, user._id],
        );
        if (!finishHelpRequest.error) {
            alertSuccess(
                'Você finalizou sua ajuda! Aguarde o dono do pedido finalizar para concluí-la',
            );
        }
        goBackToMyOfferedHelpPage();
    }

    const renderOnGoingHelpButtons = () => {
        if (helpOffer.status != 'finished' && user._id != helpOffer.ownerId) {
            return (
                <View style={styles.ViewLink}>
                    <View style={styles.ViewLinkBox}>
                        <TouchableOpacity onPress={openWhatsapp}>
                            <Icon
                                name="whatsapp"
                                type="font-awesome"
                                size={50}
                                color="#25d366"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={openGoogleMaps}>
                            <Icon
                                name="directions"
                                type="font-awesome-5"
                                size={50}
                                color="#4285F4"
                            />
                        </TouchableOpacity>
                    </View>

                    <Button
                        title="Finalizar ajuda"
                        large
                        press={() => setConfirmationModalVisible(true)}
                    />
                </View>
            );
        }
    };

    const renderWaitingHelpOwnerMessage = () => {
        if (helpOffer.status == 'waiting') {
            return (
                <Text style={styles.waitingText}>
                    Aguarde o dono da ajuda escolher seu ajudante.
                </Text>
            );
        }
    };

    const renderHelpOwnerInformation = () => {
        const ownerNameFormated = shortenName(helpOffer.user.name);

        return (
            <View style={styles.userInfo}>
                <Image
                    source={{
                        uri: `data:image/png;base64,${helpOwnerPhoto}`,
                    }}
                    style={styles.profileImage}
                />
                <View style={styles.infoTextView}>
                    <Text style={[styles.infoText, styles.infoTextFont]}>
                        {ownerNameFormated}
                    </Text>
                    <Text style={styles.infoText}>
                        <Text style={styles.infoTextFont}>Idade: </Text>
                        {getYearsSince(helpOffer.user.birthday)}
                    </Text>
                    <Text style={styles.infoText}>
                        <Text style={styles.infoTextFont}>Cidade: </Text>
                        {helpOffer.user.address.city}
                    </Text>
                </View>
            </View>
        );
    };

    const renderHelpInformation = () => (
        <View style={styles.helpInfo}>
            <View style={styles.helpInfoText}>
                <Text style={styles.titleFont}>{helpOffer.title}</Text>
                <View style={styles.categoryContainer}>
                    {helpOffer.categories.map((category) => (
                        <View key={category._id} style={styles.categoryWarning}>
                            <Text style={styles.categoryName}>
                                {category.name}
                            </Text>
                        </View>
                    ))}
                </View>
                <Text style={[styles.infoText, styles.infoTextBottom]}>
                    {helpOffer.description}
                </Text>
            </View>
        </View>
    );

    const renderInterestedUsers = () => {
        if (helpOffer.ownerId === user._id) {
            return (
                <TouchableOpacity
                    style={styles.buttonHelpers}
                    onPress={() => {
                        console.log(helpOffer);
                        navigation.navigate('listPossibleHelpers', {
                            helpOffer,
                        });
                    }}>
                    <Text style={styles.textBtn}>Interessados na Ajuda</Text>
                    <Badge
                        value={
                            <Text style={styles.labelBadge}>
                                {helpOffer?.possibleHelpers.length +
                                    helpOffer?.possibleEntities.length}
                            </Text>
                        }
                        badgeStyle={styles.badgeStyle}
                        containerStyle={styles.containerBadge}
                    />
                </TouchableOpacity>
            );
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <ConfirmationModal
                    visible={confirmationModalVisible}
                    setVisible={setConfirmationModalVisible}
                    action={finishHelp}
                    message={
                        'Você tem certeza que deseja finalizar essa ajuda?'
                    }
                    isLoading={isFinishRequestLoading}
                />
                {renderHelpOwnerInformation()}
                {renderHelpInformation()}
                {renderInterestedUsers()}
                {helpOffer.status == 'waiting'
                    ? renderWaitingHelpOwnerMessage()
                    : renderOnGoingHelpButtons()}
            </View>
        </ScrollView>
    );
}
