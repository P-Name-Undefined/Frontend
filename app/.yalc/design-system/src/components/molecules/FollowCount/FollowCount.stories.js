import React from "react";
import { View } from "react-native";
import { FollowCount } from './FollowCount';
import { NavigationContainer } from "@react-navigation/native";

const meta = {
    title: "molecules/FollowCount",
    component: FollowCount,
    args: {
        count: 1,
        type: 'following',
        userId:'12312'
    },
    decorators: [
        (Story) => (
            <NavigationContainer>
                <View style={{ padding: 16 }}>
                    <Story />
                </View>
            </NavigationContainer>
        ),
    ],
};

export default meta;

export const Basic= {};
