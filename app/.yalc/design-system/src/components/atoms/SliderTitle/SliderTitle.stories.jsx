import React from "react";
import { View } from "react-native";
import { SliderTitle } from './SliderTitle';

const meta = {
    title: "atoms/SliderTitle",
    component: SliderTitle,
    args: {
        title: "Hello world",
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
