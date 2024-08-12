import React from "react";
import { View } from "react-native";
import { DefaultButton } from './DefaultButton';

const meta = {
    title: "atoms/DefaultButton",
    component: DefaultButton,
    args: {
        title: "Hello world",
        variant: "elevated",
        size: "md",
        onPress: () => console.log("ola mundo"),
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
