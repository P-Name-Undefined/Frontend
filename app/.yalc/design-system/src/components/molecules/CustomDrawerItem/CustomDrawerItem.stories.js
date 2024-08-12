import React from "react";
import { View } from "react-native";
import { CustomDrawerItem } from './CustomDrawerItem';

const meta = {
    title: "molecules/CustomDrawerItem",
    component: CustomDrawerItem,
    args: {
        isSelected: true,
        label: "Narutin",
        icon: () => <View></View>,
        onPress: () => console.log("salve")
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
