import React from "react";
import { View } from "react-native";
import { TextSwitch } from './TextSwitch';

const meta = {
    title: "molecules/TextSwitch",
    component: TextSwitch,
    args: {
        option1: 'Narutin',
        option2: 'Sasuke',
        selectedOption: 0,
        setSelectedOption: (index) => console.log(index),
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
