import React, { useState, useContext, useCallback } from 'react';
import {
    View,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import MyRequestHelpCard from '../../../components/MyRequestHelpCard';
import { UserContext } from '../../../store/contexts/userContext';
import helpService from '../../../services/Help';
import styles from '../styles';
import colors from '../../../../assets/styles/colorVariables';

import NoHelps from '../../../components/NoHelps';
import { useFocusEffect } from '@react-navigation/native';
import useService from '../../../services/useService';

export default function HelpsFinished({ navigation }) {
    const [finishedHelpList, setFinishedHelpList] = useState([]);
    const [loadingHelpRequests, setLoadingHelpRequests] = useState(false);

    const { user } = useContext(UserContext);
    useFocusEffect(
        useCallback(() => {
            loadFinishedHelps();
        }, [navigation]),
    );

    async function loadFinishedHelps() {
        setLoadingHelpRequests(true);
        const { _id: userId } = user;
        const resFinished = await useService(
            helpService,
            'listHelpOfferFromOwner',
            [userId],
        );
        if (!resFinished.error) {
            setFinishedHelpList(resFinished);
        }
        setLoadingHelpRequests(false);
    }

    const renderLoadingIndicator = () => (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );

    const renderHelpList = () => {
        if (finishedHelpList.length > 0) {
            return (
                <ScrollView>
                    <View style={styles.helpList}>
                        {finishedHelpList.map((help) => (
                            <TouchableOpacity
                                key={help._id}
                                onPress={
                                    () => console.log('Apertou')
                                    // navigation.navigate(
                                    //     'MyRequestHelpDescrition',
                                    //     {
                                    //         help,
                                    //     },
                                    // )
                                }>
                                {/* Tirar isEntityUser depois */}
                                <MyRequestHelpCard
                                    help={help}
                                    isEntityUser={true}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            );
        } else {
            return <NoHelps title={'Você não possui nenhuma oferta criada'} />;
        }
    };
    return (
        <View>
            {loadingHelpRequests ? renderLoadingIndicator() : renderHelpList()}
        </View>
    );
}
