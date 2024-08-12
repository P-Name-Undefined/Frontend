import React from "react";
import { View } from "react-native";
import {Chips} from './Chips';

const meta = {
    title: "atoms/Chips",
    component: Chips,
    args: {
        title: "Hello World!",
        onPress: () => console.log("Hello World!"),
        type: "button",
        elevated: true,
        selected: true
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
