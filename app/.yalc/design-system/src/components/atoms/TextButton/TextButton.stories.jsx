import React from "react";
import { View } from "react-native";
import { TextButton } from './index';

const meta = {
    title: "atoms/TextButton",
    component: TextButton,
    args: {
        text: "Hello World",
        onPress: () => console.log("Salve"),
        style: ""
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
