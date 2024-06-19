import React, {
    useState,
    useContext,
    useEffect,
    Fragment,
    useRef,
} from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { UserContext } from '../../store/contexts/userContext';
import createInteraction from '../../utils/createInteraction';
import { BadgeContext } from '../../store/contexts/badgeContext';
import { DefaultButton } from '../../components/atoms/DefaultButton';
import { firstName } from '../../utils/shortenName';
import WalkthroughTooltip from '../../components/WalkthroughTooltip'
import TouchableHighlight from 'react-native-walkthrough-tooltip';
import colors from '../../../colors';
import { ActivityBottomSheetContext } from '../../store/contexts/activityBottomSheetContext';
import { ActivityBottomSheet } from '../../components/modals/ActivityBottomSheet';
import { ActivityFlatList } from '../../components/atoms/ActivityFlatList';
import { ActivitiesContext } from '../../store/contexts/activitiesContext';
import { AnimatedMap } from '../../components/organisms/AnimatedMap';
import { WalkthroughStepsContext } from '../../store/contexts/walkthroughStepsContext';
import { BadgeEarnModal } from '../../components/modals/BadgeEarnModal';

export default function Main({ navigation }) {
    const [region, setRegion] = useState(null);

    const { user, isEntity } = useContext(UserContext);
    const { getBadgeList } = useContext(BadgeContext);
    const [focusedCardLocation, setFocusedCardLocation] = useState({});
    const [visibleItemData, setVisibleItemData] = useState(null);
    const { showActivityModal, activityInfo, setShowActivityModal } =
        useContext(ActivityBottomSheetContext);
    const { activitiesList } = useContext(ActivitiesContext);
    const limitedActivitiesList = activitiesList.slice(0, 15);
    const { setCompleted, completed } = useContext(WalkthroughStepsContext);

    const handleGetBadges = async () => {
        await getBadgeList(user._id);
    };

    useEffect(() => {
        setRegion(null);
    }, [region]);

    useEffect(() => {
        if (!showActivityModal) handleGetBadges();
    }, [showActivityModal]);

    const renderHelpButtons = () => {
        return (
            <Fragment>
                {renderWelcomeText()}
                <WalkthroughTooltip incomingWalkthroughStep={1}>
                  <TouchableHighlight>
                    {isEntity ? (
                        <DefaultButton
                            title="Criar campanha"
                            variant="elevated"
                            size="md"
                            onPress={() =>
                                createInteraction(
                                    user,
                                    navigation,
                                    'createCampaign',
                                )
                            }
                        />
                    ) : (
                        <View className="flex-row space-x-2 justify-between">
                            <DefaultButton
                                width="w-[48%]"
                                title="Criar pedido"
                                variant="elevated"
                                size="md"
                                onPress={() =>
                                    createInteraction(
                                        user,
                                        navigation,
                                        'createHelpRequest',
                                    )
                                }
                            />
                            <DefaultButton
                                width="w-[48%]"
                                title="Criar oferta"
                                variant="elevated"
                                size="md"
                                onPress={() =>
                                    createInteraction(
                                        user,
                                        navigation,
                                        'createHelpOffer',
                                    )
                                }
                            />
                        </View>
                    )}
                  </TouchableHighlight>
                </WalkthroughTooltip>
            </Fragment>
        );
    };

    const renderWelcomeText = () => {
        const welcomeText = isEntity
            ? 'vamos mudar a vida das pessoas?'
            : 'o que vamos fazer hoje?';
        return (
            <View className="mt-4 mb-3">
                <Text className="font-ms-regular text-lg text-black-900 leading-6">
                    <Text className="font-ms-bold text-black-900">
                        Olá {firstName(user.name)},
                    </Text>
                    {'\n'}
                    {welcomeText}
                </Text>
            </View>
        );
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems && viewableItems.length > 0) {
            const visibleItem = viewableItems[0].item;
            setVisibleItemData(visibleItem);
            setFocusedCardLocation({
                latitudeDelta: 0.0015,
                longitudeDelta: 0.0015,
                longitude: visibleItem.location.coordinates[0],
                latitude: visibleItem.location.coordinates[1],
            });
        }
    });

    const useRenderHelpCards = () => {
        return (
            <View className="mt-4">
                <View className="flex-row items-center justify-between">
                    <Text className="text-black-900 text-lg font-ms-bold">
                        Próximos a você
                    </Text>
                    <Pressable
                        onPress={() => navigation.navigate('mapScreen')}
                        android_ripple={{ color: colors.gray.DEFAULT }}
                        className="p-1"
                    >
                      <WalkthroughTooltip 
                        incomingWalkthroughStep={4} 
                        customCloseAction={() => navigation.navigate('mapScreen')}
                      >
                        <Text className="text-primary font-ms-bold">
                            VER MAIS
                        </Text>
                      </WalkthroughTooltip>
                    </Pressable>
                </View>
                <WalkthroughTooltip incomingWalkthroughStep={3}>
                  <ActivityFlatList
                      list={limitedActivitiesList}
                      onViewableItemsChanged={onViewableItemsChanged}
                  />
                </WalkthroughTooltip>
            </View>
        );
    };

    const mapHeight = Dimensions.get('window').height * 0.32;

    return (
        <View className="px-6">
            {renderHelpButtons()}
            <View className="mt-4">
                <Text className="text-lg font-ms-bold text-black-900">
                    Mapa
                </Text>
                <View
                    className="mt-2 rounded-2xl overflow-hidden"
                    style={{ height: mapHeight }}
                >
                    <AnimatedMap
                        list={limitedActivitiesList}
                        navigation={navigation}
                        focusedCardLocation={focusedCardLocation}
                        visibleItemData={visibleItemData}
                        incomingWalkthroughStep={2}
                    />
                </View>
            </View>
            {useRenderHelpCards()}
            {showActivityModal && (
                <ActivityBottomSheet
                    navigation={navigation}
                    isRiskGroup={false}
                    setShowModal={setShowActivityModal}
                    selectedActivity={activityInfo}
                />
            )}
            {completed && (
              <BadgeEarnModal 
                badges={[{template: {category: 'tutorialCompleted', rank: 1, iconName: 'volunteer-activism'}}]}
                setIsVisible={setCompleted}
                onviewBadge={() => {}}
              />
            )}
        </View>
    );
}
