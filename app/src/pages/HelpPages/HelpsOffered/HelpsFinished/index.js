import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../../MyRequests/styles';
import HistoricCard from '../../../../components/HistoricCard';
import { UserContext } from '../../../../store/contexts/userContext';
import NoHelps from '../../../../components/NoHelps';
import helpService from '../../../../services/Help';
import colors from '../../../../../assets/styles/colorVariables';
import useService from '../../../../services/useService';

import { TouchableOpacity } from 'react-native-gesture-handler';
export default function AskedHelps({ navigation }) {
    const { user } = useContext(UserContext);
    const [myFinishedHelps, setMyFinishedHelps] = useState([]);
    const [loadingFinishedHelps, setLoadingFinishedHelps] = useState(true);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getHelps();
        });
        return unsubscribe;
    }, [navigation]);

    async function getHelps() {
        setLoadingFinishedHelps(true);
        const helps = await useService(helpService, 'getHelpMultipleStatus', [
            user._id,
            'finished',
            true,
        ]);
        if (!helps.error) {
            setMyFinishedHelps(helps);
        }
        setLoadingFinishedHelps(false);
    }

    const renderLoadigIndicator = () => (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );
    const renderHelpList = () => {
        if (myFinishedHelps.length > 0) {
            return (
                <ScrollView>
                    {myFinishedHelps.map((help) => (
                        <TouchableOpacity
                            key={help._id}
                            onPress={() =>
                                navigation.navigate('OfferDescription', {
                                    help,
                                })
                            }>
                            <HistoricCard object={help} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            );
        } else {
            return (
                <NoHelps title="Você não está ajudando ninguém até o momento" />
            );
        }
    };
    return (
        <View style={styles.helpList}>
            {loadingFinishedHelps ? renderLoadigIndicator() : renderHelpList()}
        </View>
    );
}
