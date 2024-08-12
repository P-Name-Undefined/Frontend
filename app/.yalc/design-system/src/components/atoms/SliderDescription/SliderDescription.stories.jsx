import React from "react";
import { View } from "react-native";
import { SliderDescription } from './SliderDescription';

const meta = {
    title: "atoms/SliderDescription",
    component: SliderDescription,
    args: {
        description: "Hello world",
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
