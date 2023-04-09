import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tailwindConfig from '../../../../tailwind.config';
import Badge from '../../molecules/Badge';
import navigateToDescription from '../../../utils/navigateToDescription';
import { ActivitiesContext } from '../../../store/contexts/activitiesContext';
import { UserContext } from '../../../store/contexts/userContext';
import { useNavigation } from '@react-navigation/native';
import { LoadingContext } from '../../../store/contexts/loadingContext';

export const ActivityCard = ({
    variant,
    title,
    description,
    badges,
    isRiskGroup = false,
    distance,
    count,
    id,
}) => {
    const { getActitivtieById } = useContext(ActivitiesContext);
    const { setIsLoading } = useContext(LoadingContext);
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    const activitiesVariants = {
        help: {
            icon: {
                name: 'exclamation',
                type: 'font-awesome',
            },
            translation: 'Pedido',
        },
        offer: {
            icon: {
                name: 'volunteer-activism',
                type: 'material',
            },
            translation: 'Oferta',
        },
        campaign: {
            icon: {
                name: 'home',
                type: 'material',
            },
            translation: 'Campanha',
        },
    };
    const selectedVariant = activitiesVariants[variant];
    const color = {
        font: isRiskGroup ? 'text-danger' : 'text-primary-400',
        icon: isRiskGroup
            ? tailwindConfig.theme.extend.colors.danger
            : tailwindConfig.theme.extend.colors.primary[400],
    };

    const handleClick = async () => {
        setIsLoading(true);
        const activity = await getActitivtieById(variant, id);
        setIsLoading(false);
        if (!activity.error)
            navigateToDescription(variant, user, navigation, activity);
    };
    return (
        <TouchableOpacity
            className="rounded-2xl shadow-md shadow-black p-4 mx-2 bg-white w-72"
            onPress={handleClick}
        >
            <View className="flex-row items-center">
                <Icon
                    name={selectedVariant.icon.name}
                    size={18}
                    color={color.icon}
                    type={selectedVariant.icon.type}
                />
                <Text className={`${color.font} font-bold ml-1 text-base`}>
                    {`${selectedVariant.translation} ${count}`}
                </Text>
            </View>
            <Text
                className="max-w-sm text-primary font-semibold text-base"
                numberOfLines={1}
            >
                {title}
            </Text>
            <Text className="text-black text-xs mb-4" numberOfLines={2}>
                {description}
            </Text>
            <View className="flex-row justify-between">
                {badges && <Badge title={badges[0].name} />}
                <Text className="font-bold">
                    {distance?.split(' ').join('')}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
