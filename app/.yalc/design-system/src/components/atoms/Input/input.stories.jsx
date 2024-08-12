import React from "react";
import { View } from "react-native";
import {Input} from './Input';

const meta = {
    title: "atoms/Input",
    component: Input,
    args: {
        change: () => console.log(""),
        label: "CEP",
        placeholder: "Digite seu CEP",
        value: "",
        keyboard: "numeric",
        maxLength: 8,
        disabled: true
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
