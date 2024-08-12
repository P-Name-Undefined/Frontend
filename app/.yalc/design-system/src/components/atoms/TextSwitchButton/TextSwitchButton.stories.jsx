import React from "react";
import { View } from "react-native";
import { TextSwitchButton } from './TextSwitchButton';

const meta = {
    title: "atoms/TextSwitchButton",
    component: TextSwitchButton,
    args: {
        text: "Hello World",
        isSelected: true,
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
