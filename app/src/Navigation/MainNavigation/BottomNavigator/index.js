import React, { useContext } from 'react';
import { HelpContext } from '../../../store/contexts/helpContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapNavigation from '../MapStackNavigator';
import ProfileNavigation from '../ProfileNavigator';
import OngActivitiesNavigator from '../OngActivitiesNavigator';
import Splash from '../../../pages/Splash';
import navigationIconsConfig from './navigationIcons.options';
import navigationOptions from './BottomNavigator.options';
import FAQNavigator from '../FAQNavigator';
import NotificationNavigation from '../NotificationNavigator';
import { UserContext } from '../../../store/contexts/userContext';
import ActivitiesNavigator from '../ActivitiesNavigator';

const BottomNavigation = createBottomTabNavigator();
const BottomTab = () => {
    const { loadingHelps } = useContext(HelpContext);
    const { user } = useContext(UserContext);
    const isEntity = !!user.cnpj;
    if (loadingHelps) return <Splash />;

    return (
        <BottomNavigation.Navigator
            tabBarOptions={navigationOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) =>
                    navigationIconsConfig(focused, route),
            })}
            initialRouteName="main">
            <BottomNavigation.Screen
                name="notification"
                component={NotificationNavigation}
            />
            <BottomNavigation.Screen name="FAQ" component={FAQNavigator} />
            <BottomNavigation.Screen name="main" component={MapNavigation} />
            <BottomNavigation.Screen
                name="history"
                component={
                    isEntity ? OngActivitiesNavigator : ActivitiesNavigator
                }
            />
            <BottomNavigation.Screen
                name="profile"
                component={ProfileNavigation}
            />
        </BottomNavigation.Navigator>
    );
};

export default BottomTab;
