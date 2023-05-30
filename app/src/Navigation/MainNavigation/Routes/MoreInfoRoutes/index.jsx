import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Location from '../../../../pages/AuthPages/Location';
import Photo from '../../../../pages/AuthPages/Photo';
import Address from '../../../../pages/AuthPages/Address';
const Stack = createStackNavigator();

export const MoreInfoRoutes = () => {
    return (
        <>
            <Stack.Screen
                name="location"
                options={{ headerShown: false }}
                component={Location}
            />
            <Stack.Screen name="address" component={Address} />
            <Stack.Screen name="photo" component={Photo} />
        </>
    );
};
