import React from "react";
import { View } from "react-native";
import { Divider } from './Divider';

const meta = {
    title: "atoms/Divider",
    component: Divider,
    args: {
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
