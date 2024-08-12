import React from "react";
import { View } from "react-native";
import { DescriptionBox } from './DescriptionBox';

const meta = {
    title: "molecules/DescriptionBox",
    component: DescriptionBox,
    args: {
        title: 'Narutin',
        description: 'Narutin eh demais muleke'
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
