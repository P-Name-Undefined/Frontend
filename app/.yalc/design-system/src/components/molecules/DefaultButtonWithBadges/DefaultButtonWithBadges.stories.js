import React from "react";
import { View } from "react-native";
import { DefaultButtonWithBadges } from './DefaultButtonWithBadges';

const meta = {
    title: "molecules/DefaultButtonWithBadges",
    component: DefaultButtonWithBadges,
    args: {
        title: "Narutin",
        onPress: () => console.log("salve"),
        badgeValue: "1",
        disabled: false,
    },
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
};

export default meta;


export const Basic= {};
