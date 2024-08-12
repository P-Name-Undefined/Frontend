import React from "react";
import { View } from "react-native";
import { RoundedFullButton } from "./RoundedFullButton";

const meta = {
    title: "atoms/RoudedFullButton",
    component: RoundedFullButton,
    args: {
        text: "Teste",
        onPress: () => console.log("Hellow"),
        variant: 'secondary',
        disabled: false,
        width: "0",
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
